const { findAll ,findProduct} = require("../models/product.operation");
async function getProducts(req, res,next){

    try {
        let products = await findAll();
        res.render('customer/products/all-product',{products:products});
    } catch (error) {
        next(error);
    }
}

async function getProduct(req, res ,next) {
    let id= req.params.id;
    let productDetails=await findProduct(id);
    // console.log( id);
   
        let data=Object.entries(productDetails);
        data=productDetails[2][1];
        // console.log(data);
    res.render('customer/products/product-details',{product:data})
}
module.exports={
    getProducts:getProducts,
    getProduct:getProduct
}