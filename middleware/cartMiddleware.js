const cartModel = require("../models/cart.model");


async function cartMiddleware(req,res,next){
const cart=new cartModel();
    if(!req.session.cart){
        let cart=[];
    }
    else{
        let data=await cartModel.find();
    }
    res.locals.cart=cart
    next();
}

module.exports=cartMiddleware;