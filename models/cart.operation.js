
const Cart = require("./cart.model");
const { placeOrder,fetchOrder } = require("./order.opertions");

async function addProductToCart(req, data) {
  // const cart
//   console.log("-----============-");
//   console.log(req.session);
//   console.log(data);
//   console.log("----===========---");
  let cart = req.session.cart;
  //
  const item = {
    title: data.title,
    price: data.price,
    id: data.id,
    Quantity: 1,
  };

  if (cart.length == 0) {
    cart.push(item);
  } else {
    let flag = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === item.id) {
        cart[i].Quantity += 1;
        cart[i].price =(cart[i].price *1)+( 1*data.price);
        flag = true;
      }
    }
    if (!flag) {
      cart.push(item);
    }
  }
  try {
    let response = await Cart.findOneAndUpdate(
      { _id: req.session.uid },
      { $set: { Items: cart } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    // console.log("-------");
    // console.log(response);
    return response;
    // console.log("-------");
  } catch (error) {
    next(error);
  }
  //   }
//   console.log(data + "----");
}

async function fetchProducts() {
  try {
    let data = await Cart.find();
    // console.log(data[0].Items);
    return data[0].Items;

  } catch (error) {}
}

async function placeMyOrder(req, res, next) {

  let cart=await fetchProducts();
  // console.log("=================1");
  // console.log(cart);
  let data= await placeOrder(cart,req,next);
  // for(let i=0;i<cart.lenght;i++){
  
  // }
// console.log("-----------2"+data);
  try {
    let response = await Cart.findOneAndUpdate(
      { _id: req.session.uid },
      { $set: { Items: null } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );


    // console.log("-------1");
    // console.log(response);
    return response;
    // console.log("-------");
  } catch (error) {
    next(error);
  }
}



async function fetchOrders(req){
  let order=await fetchOrder(req);
  // console.log(order);
  return await order;
}
module.exports = {
  addProductToCart,
  fetchProducts,
  placeMyOrder,
  fetchOrders
};
