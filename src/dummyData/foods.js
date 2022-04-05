const dummyData =[
    {   
        "id" : 1,
        "category":"vegeterian",
        "name" : "Margherita",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/c4550bdc93/classics-vegan-margherita-pizza.jpg" ,
        "price": 12.00,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 2,
        "category":"vegeterian",
        "name" : "Vegan Cheese Lovers",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/88b67a6d22/classics-vegan-cheese-lovers-pizza.jpg" ,
        "price": 15,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 3,
        "category":"vegeterian",
        "name" : "Vegan Mediterranean Pizza",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/f8dec8cb04/lunch-vegan-mediterranean-pizza.jpg" ,
        "price": 22,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 4,
        "category":"vegeterian",
        "name" : "Cheese Lovers Pizza",
        "img" : "https://img2.storyblok.com/500x500/smart/filters:format(webp):quality(90)/f/49069/1800x1800/57f454f07a/lunch-cheese-lovers-pizza.jpg" ,
        "price":16,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 5,
        "category":"vegeterian",
        "name" : "Veggie Sensation Pizza",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/1badbe6de1/lunch-veggie-sensation-pizza.jpg" ,
        "price": 8,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 6,
        "category":"meat",
        "name" : "Premium Hot Spicy Chicken Pizza",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/3864611667/premium-hot-spicy-chicken-pizza.jpg" ,
        "price": 32,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 7,
        "category":"meat",
        "name" : "Premium BBQ Chicken",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/8e89239b07/premium-bbq-chicken-pizza.jpg" ,
        "price": 17,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 8,
        "category":"meat",
        "name" : "Loaded Super Supreme Pizza",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/1710254a7f/loaded-super-supreme-pizza.jpg" ,
        "price": 11,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 9,
        "category":"meat",
        "name" : "Loaded Ultimate Hot Spicy Pizza",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/4c363e333b/loaded-ultimate-hot-spicy-pizza.jpg" ,
        "price": 15,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 10,
        "category":"meat",
        "name" : "Favourites Pepperoni Lovers Pizza",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/786755c230/favourites-pepperoni-lovers-pizza.jpg" ,
        "price":34,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 11,
        "category":"meat",
        "name" : "BBQ Meatlovers Pizza",
        "img" : "https://img2.storyblok.com/500x500/smart/filters:format(webp):quality(90)/f/49069/1800x1800/148520caa0/favourites-bbq-meatlovers-pizza.jpg" ,
        "price": 38,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    }, 
    {   
        "id" : 12,
        "category":"meat",
        "name" : "Chicken Supreme Pizza",
        "img" : "https://img2.storyblok.com/500x500/filters:format(webp):quality(90):focal(80x200:420x300)/f/49069/1800x1800/d1fc70df0b/favourites-chicken-supreme-pizza.jpg" ,
        "price": 42,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    }   
]

export default dummyData;