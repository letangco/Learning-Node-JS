const { response } = require('express');
const Product = require('../../models/product.model');

module.exports.showProduct = async (req,res,next)=>{
    // Sử dụng Async - Await
    var products = await Product.find();
    res.json(products);
}

module.exports.createProduct = async function(req,res,next){
    var product = await Product.create(req.body);
    console.log(req.body);
    res.json(product);
}

module.exports.updateProduct = async function(req, res, next){
    const id = req.params.id;
    const result = await Product.findById(id);
    if (!result)
        return res.json();

    Object.keys(req.body).forEach((item)=>{
        result[item] = req.body[item];
    }) 

    await result.save()
    res.json({
        success: true,
        payload: result
    })
}