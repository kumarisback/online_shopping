const express =require('express');
const {addItem,fetchCart,placeOrder,fetchOrder}= require('../controllers/cart.controller');

const router = express.Router();

router.post('/cart',addItem);
router.get('/cart',fetchCart);
router.post('/order',placeOrder);
router.get('/orders',fetchOrder);
// router.get('/products/:id',getProduct);
module.exports=router;