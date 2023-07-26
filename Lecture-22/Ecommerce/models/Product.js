const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({ //schema
    name:{
        type : String,
        trim : true,
        required : true
    },
    img:{
        type : String,
        trim : true
    },
    price:{
        type : Number,
        min : 0,
        required : true
    },
    desc:{
        type : String,
        trim : true
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

const Product = mongoose.model('Product' , productSchema); //model

module.exports = Product;