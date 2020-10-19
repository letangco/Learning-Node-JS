// const db = require('../db');

var Product = require('../models/product.model');

module.exports.showProduct = async (req, res, next) => {
    const q = req.query.q || '';
    let re = new RegExp(q, 'i');

    if (q === '') {
        var products = await Product.find({ "name":{$regex: re}}).skip(0).limit(10);
        // Trả về view là một object dạng {products : products}
        res.render('products/product', { products: products });
    }
    else if (q !== '') {
        var products = await Product.find({ "name":{$regex: re}}).limit(10);
        // Trả về view là một object dạng {products : products}
        res.render('products/product', { products: products });
    }
};