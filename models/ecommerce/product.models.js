const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    productImage:{
        type: String,
    },
    price:{
        type:Number,
        default: 0,
    },
    stock:{
        default: 0,
        type: Number
    },
    category:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},{timestamps:true})

module.exports = mongoose.model('Product', productSchema);