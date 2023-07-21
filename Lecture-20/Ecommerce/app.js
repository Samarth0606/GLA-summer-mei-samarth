require('dotenv').config()
const express = require('express');
const app = express(); //instance of your application
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/productRoutes');
const methodOverride = require('method-override');

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})



app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public'))); // static files
// body parser
app.use(express.urlencoded({ extended: true })); //for form data
app.use(methodOverride('_method'))

// seedDB();


app.use(productRoutes);



const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`server connected at port ${port}`)
})