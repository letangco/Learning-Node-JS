// const db =  require('../db');
const Product = require('../../models/product.model');

module.exports.showProduct = async (req,res,next)=>{
    // Sử dụng Async - Await
    var products = await Product.find();
    res.json(products);
}

module.exports.createProduct = async(req, res, next)=>{
    var newProduct = await Product.create(req.body);
    res.json(newProduct);
};