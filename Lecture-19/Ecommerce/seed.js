const mongoose = require('mongoose');

const Product = require('./models/Product');

const products = [
    {
        name: "Iphone 14 Pro",
        img: "https://images.unsplash.com/photo-1688780074342-7dddd9b5f582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTRwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 129999,
        desc: "This product is a rare beauty and its a premium product, GoodLuck !!!"
    },
    {
        name: "Macbook Pro M2",
        img: "https://images.unsplash.com/photo-1675868374249-da10b594b31d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHBybyUyMG0yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 187999,
        desc: "This product is a beast machine and highly performabe, Must buy it :)"
    },
    {
        name: "Ipad Mini",
        img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlwYWQlMjBtaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 56000,
        desc: "This product is a cutie and highly portable, slique XD"
        
    },
    {
        name: "Airpods Pro 2",
        img:"https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGklMjB3YXRjaCUyMHVsdHJhJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 24999,
        desc: "This product is highly usable , buy it right now :("
    },
    {
        name: "I watch Ultra",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3nhjIlUqnN5HYAnVGI9IJfWKhi7dW9HjFtw&usqp=CAU",
        price: 79000,
        desc: "This product is a delicate , buy at your own risk !"
        
    },
    {
        name: "Air tag",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWFzLxZRyTHKyaUDNYow9t3RQCQSV8pkVTw&usqp=CAU",
        price: 5000,
        desc: "This product is aaive marzee hai lena hai to (._.)"
    }
]

// seeding function
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully")
}

module.exports = seedDB;