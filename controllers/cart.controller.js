const { addProductToCart , fetchProducts,placeMyOrder,fetchOrders} = require("../models/cart.operation");
async function addItem(req, res, next) {
  try {
    // console.log("----------");
    let { title, price, id } = req.body;
    let data = { title: title, price: price, id: id };
    // console.log(req.body);
    
    let resP=await addProductToCart(req, data);
    req.session.cart=resP.Items;
    // console.log(title+"----------"+price+"----"+id);
    res.redirect("/products");
  } catch (error) {
    next(error);
  }
}

async function fetchCart(req,res,next){
 try {
    let cart=await fetchProducts();
    // console.log(cart);

    res.render('customer/cart/cart',{cart:cart});
 } catch (error) {
     next(error);
 }
}

async function placeOrder(req,res,next){
  try {
     let order=await placeMyOrder(req,res,next);
    //  console.log(order);
     res.redirect('/products');
  } catch (error) {
      next(error);
  }
 }

 async function fetchOrder(req,res,next){
  try {
     let order=await fetchOrders(req,res,next);
     if(order.length===0){
      res.render('customer/order/orderDetails',{order:order});
     }
     else{
      res.render('customer/order/orderDetails',{order:order[0].Items});
     }
     
     
  } catch (error) {
      next(error);
  }
 }
module.exports = {
  addItem,fetchCart,placeOrder,fetchOrder
};
