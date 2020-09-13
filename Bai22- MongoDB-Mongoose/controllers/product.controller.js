// const db =  require('../db');
const Product = require('../models/product.model');

module.exports.showProduct = async (req,res,next)=>{
    // const q= req.query.q || '';

    // var page = parseInt(req.query.page) ||1; //n
    // var perPage = 8;

    // var start = (page-1) *perPage;
    // var end = (page*perPage);
    // res.render('products/product',{products:  db.get('products').value().slice(start,end).filter(function(user){
    //     return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    // })});

    // Sử dụng Promise trả dữ liệu về ****

    // Product.find().then(function(products){
    //     res.render('products/product',{products:  products});
    // })

    // Sử dụng Async - Await
    var products = await Product.find();
    res.render('products/product',{products: products});
}