const req = require("express/lib/request");
const Order = require("./order.model");

async function placeOrder(cart,req,next){
    console.log("=================");
    console.log(cart);
    let data=await fetchOrder(req);

    let order=[];
    // data[0].Items.push(cart);
    if(!data || data.length===0){
        order=[];
    }
    else{
        
        order.push(...data[0].Items);
        // data=data[0].Items.push(cart);
    }
    order.push(...cart);
    console.log(order);
    try {
        let response = await Order.findOneAndUpdate(
          { _id: req.session.uid },
          { $set: { Items:order  } },
          { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        // console.log(response);
        req.session.cart=[];
        return response;
      } catch (error) {
        next(error);
      }
}

async function fetchOrder(req){
   let or=await  Order.find({_id:req.session.uid});
   return or;
}

module.exports={placeOrder,fetchOrder}