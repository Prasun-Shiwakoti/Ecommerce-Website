const offers = [
    {
        "id":1,
        "title": "20% OFF ON ALL ORDERS",
        "img": "../static/img/offer-1.png",
        "offeron": "Spring Collection",
        "includedProductsId": [1,5]
    },
    {
        "id": 2,
        "title": "20% OFF ON ALL ORDERS",
        "img": "../static/img/offer-2.png",
        "offeron": "Winter Collection",
        "includedProductsId": [0,2]
    },

]

const productDetails = [
    {
        "id": 0,
        "name": "Mens Stylish Shirt",
        "rating":4,
        "nreviews": 150,
        "price": 150,
        "prevPrice": null,
        'color': "red",
        'size':"XS",
        'type': ['mens cloth', 'shirt'],
        "discription": "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
        "longDiscription": "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.\n\nDolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.",
        "reviews": [
            {
                "name":"Jhon Doe",
                "rating": 4,
                "img": "../static/img/user.jpg",
                "review": "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum."
            }
        ],
        "img":["../static/img/product-1.jpg", "../static/img/product-2.jpg","../static/img/product-3.jpg","../static/img/product-4.jpg"] 
    },
    {
        "id": 1,
        "name": "Mens Stylish Jeans",
        "rating":4,
        "nreviews": 50,
        "price": 150,
        "prevPrice": 200,
        'color': "blue",
        'size':"S",
        'type': ['mens cloth', 'jeans'],
        "discription": "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
        "longDiscription": "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.\n\nDolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.",
        "reviews": [
            {
                "name":"Jhon Doe",
                "rating": 4,
                "img": "../static/img/user.jpg",
                "review": "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum."
            }
        ],
        "img":["../static/img/product-5.jpg", "../static/img/product-2.jpg","../static/img/product-3.jpg","../static/img/product-4.jpg"] 
    },
    {
        "id": 2,
        "name": "Women Stylish Shirt",
        "rating":4,
        "nreviews": 50,
        "price": 150,
        "prevPrice": null,
        'color': "green",
        'size':"M",
        'type': ['womens cloth', 'shirt'],
        "discription": "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
        "longDiscription": "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.\n\nDolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.",
        "reviews": [
            {
                "name":"Jhon Doe",
                "rating": 4,
                "img": "../static/img/user.jpg",
                "review": "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum."
            }
        ],
        "img":["../static/img/product-6.jpg", "../static/img/product-2.jpg","../static/img/product-3.jpg","../static/img/product-4.jpg"] 
    },
    {
        "id": 3,
        "name": "Women Stylish Sleepwear",
        "rating":4,
        "nreviews": 50,
        "price": 150,
        "prevPrice": 200,
        'color': "black",
        'size':"L",
        'type': ['women cloth', 'sleepwear'],
        "discription": "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
        "longDiscription": "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.\n\nDolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.",
        "reviews": [
            {
                "name":"Jhon Doe",
                "rating": 4,
                "img": "../static/img/user.jpg",
                "review": "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum."
            }
        ],
        "img":["../static/img/product-7.jpg", "../static/img/product-2.jpg","../static/img/product-3.jpg","../static/img/product-4.jpg"] 
    },
    {
        "id": 4,
        "name": "men Stylish blazer",
        "rating":4,
        "nreviews": 50,
        "price": 150,
        "prevPrice": null,
        'color': "white",
        'size':"XL",
        'type': ['mens cloth', 'blazer'],
        "discription": "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
        "longDiscription": "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.\n\nDolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.",
        "reviews": [
            {
                "name":"Jhon Doe",
                "rating": 4,
                "img": "../static/img/user.jpg",
                "review": "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum."
            }
        ],
        "img":["../static/img/product-8.jpg", "../static/img/product-2.jpg","../static/img/product-3.jpg","../static/img/product-4.jpg"] 
    },
    {
        "id": 5,
        "name": "unisex Stylish shoes",
        "rating":4,
        "nreviews": 50,
        "price": 150,
        "prevPrice": 200,
        'color': "white",
        'size':"M",
        'type': ['shoes'],
        "discription": "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
        "longDiscription": "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.\n\nDolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.",
        "reviews": [
            {
                "name":"Jhon Doe",
                "rating": 4,
                "img": "../static/img/user.jpg",
                "review": "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum."
            }
        ],
        "img":["../static/img/product-4.jpg", "../static/img/product-2.jpg","../static/img/product-3.jpg","../static/img/product-4.jpg"] 
    },

]

const trendyProducts = [4,5]
const newProducts = [1,2]


module.exports = {"offers": offers, "trendyProducts": trendyProducts, "newProducts":newProducts, "productDetails":productDetails}