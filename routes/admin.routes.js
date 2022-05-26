const express =require('express');
const imageUploadMiddleware= require('../middleware/image-upload')
const adminController=require('../controllers/admin.controller')
const router = express.Router();

router.get('/product',adminController.getProducts);
router.get('/product/new',adminController.getNewProduct);
router.post('/products',imageUploadMiddleware,adminController.createNewProduct);
router.get('/products/:id',adminController.editProducts);
router.post('/products/:id',imageUploadMiddleware,adminController.updateProducts);
router.post('/products/delete/:id',adminController.deleteProducts);
router.get('/orders',adminController.fetchOrders);
module.exports=router;