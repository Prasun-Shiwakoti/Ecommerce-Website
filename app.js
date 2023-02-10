if (process.env.NODE_ENV !== 'production'){
    require("dotenv").config()
}

const express = require("express")
const path = require("path")
const infos = require("./info")
const models = require("./models")
const bcrypt = require("bcrypt")
const flash = require("express-flash")
const sessions = require("express-session")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const { all } = require("express/lib/application")

const port = 80

const app = express()
app.set("view-engine", "pug")
app.set("views", path.join(__dirname, "views"))
app.use("/static", express.static("static"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash())
app.use(sessions({
    secret:process.env.SESSION_KEY,
    resave: false, 
    saveUninitialized: false
}))
app.use(cookieParser())
// app.use(authenticateUser)

app.get("/index", authenticateUser, (req, res) => {
    allProducts = infos.productDetails

    tPorducts = []  
    infos.trendyProducts.forEach((e,i)=>{
        tPorducts.push(allProducts[e])
    })
    nPorducts = []
    infos.newProducts.forEach((e,i)=>{
        nPorducts.push(allProducts[e])
    })

    content = {
        "offers":infos.offers,
        "tproducts": tPorducts,
        "nproducts":nPorducts,
    }
    res.render("index.pug", content)
})
app.get("/details", authenticateUser, (req, res)=>{
    id = req.query.id
    allProducts = infos.productDetails
    if (id == undefined || id >= allProducts.length){
        res.redirect("/index")
        return
    }
    tPorducts = []  
    infos.trendyProducts.forEach((e,i)=>{
        tPorducts.push(allProducts[e])
    })
    context = {
        "product": infos.productDetails[id],
        "tproducts": tPorducts,
    }
    res.render("detail.pug", context)
})
app.get("/cart", authenticateUser, async (req, res)=>{
    allProducts = infos.productDetails
    user =  await models.User.findOne({_id:req.userObj._id})
    orders = []
    user.cart.forEach(e=>{
        if (e < allProducts.length){
            orders.push(allProducts[e])
        }
    })
    content = {
        orders: orders
    }
    res.render("cart.pug", content)
})
app.post("/addToCart", authenticateUser, async (req,res)=>{
    id = Number(req.body.productId) 
    user =  await models.User.findOne({_id:req.userObj._id})
    console.log(id, "\n", user, "\n", user.cart, "\n", user.cart.indexOf(id))
    if(user.cart.indexOf(id) == -1){
        user.cart.push(id)
        await user.save()
    }
    // res.status(200).json({"message":"Added Successfully"})
    res.render("landing.pug")
})
app.post("/deleteFromCart", authenticateUser, async(req,res)=>{
    id = Number(req.body.productId)
    user =  await models.User.findOne({_id:req.userObj._id})
    const index = user.cart.indexOf(id)
    if(index> -1){
        user.cart.splice(index, 1);
        await user.save()
    }
    res.status(200).json({"message":"Removed Successfully"})
})
app.get("/shop", authenticateUser, (req, res)=>{
    allProducts = infos.productDetails

    content = {
        products: allProducts
    }

    res.render("shop.pug", content)
})
app.get("/checkout", authenticateUser, (req, res)=>{
    cartDetails = req.body.cartDetails
    res.render("checkout.pug")
})
app.get("/login", (req, res)=>{
    res.render("landing.pug")
})
app.post("/login", authenticateUser, async (req, res)=>{
    
    username = req.body.username
    password = await bcrypt.hash(req.body.password, 10)
    userCheck = await models.User.findOne({username:username})
    if (userCheck){
        passCheck = await bcrypt.compare(req.body.password, userCheck.password)
        if (passCheck){
            const token = jwt.sign({userObj: userCheck, id:userCheck._id}, process.env.SESSION_KEY)
            req.session.sessionToken = token
            // console.log(req.session, " Printed while login")
            res.redirect("/index")
            return
        }
    }
    res.render("landing.pug", {errorMessage: "Incorect Username or Password"})
})
app.post("/register", authenticateUser, async (req, res)=>{
    delete req.body.remember
    req.body.password = await bcrypt.hash(req.body.password, 10)

    userCheck = await models.User.find({$or:[{username: req.body.username}, {email:req.body.email}]})
    if (userCheck != false){
        res.render("landing.pug", {"errorMessage": "Either Username or email is already taken. Please try again"})  
        return 
    }   
    userObj = new models.User(req.body)
    userObj.save().then(()=>{
        res.render("landing.pug", {errorMessage: "Registration successful. Please login."})
    }).catch((error)=>{
        res.status(500).json({"message": "Something went wrong"});
        console.log("Something went wrong: ", error)
        console.log("The request body was: \n", req.body)
    })
})

function authenticateUser(req, res, next){
    console.log(req.url)
    // console.log(req.url, " Printed while authenticating")
    token = req.session.sessionToken
    // console.log("token: ", token, " Printed while authenticating")
    if (token){
        token = jwt.verify(token, process.env.SESSION_KEY)
        req.userObj = token.userObj
        if (token.userObj._id === token.id){
            if (req.url === "/login" || req.url === "/register"){
                res.redirect("/index")
                return
            }
            next()
            return
        }
    }
    if (req.url === "/login" || req.url === "/register"){
        next()
        return
    }
    res.redirect("/login")
}



app.all('*', function(req, res) {
    res.redirect("/index");
});
app.listen(port, ()=>{
    console.log("Have fun")
})