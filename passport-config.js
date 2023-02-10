const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const models = require("./models")

function initialize(passport){

    const authenticateUser = async (username, password, done)=>{
        const user = models.User.find({username:username})
        if(user == null){
            return done(null, false, {"message": "No user found with that username"})
        }

        try{
            if (await bcrypt.compare(password, user.password)){
                return done(null, user)
            }
            else{
                return done(null, false, {message: "incorrect password"})
            }
        }catch(err){
            return done(e)
        }


    }

    passport.use(new LocalStrategy({}, authenticateUser))
    passport.serializeUser((user, done)=>{
        done(null, user.id)
    })
    passport.deserializeUser((id, done)=>{
        done(null, models.User.find({id:id}))
    })

}

module.exports = initialize