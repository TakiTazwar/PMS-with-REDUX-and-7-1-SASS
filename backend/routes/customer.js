const express = require('express');
const router = express.Router();
const customerController=require('../controller/customer');
const auth = require("../middlewares/auth");
const validator = require('../middlewares/validation');


router.get('/viewallmedicine', customerController.getAllMedicine);

router.get('/viewmedicine/:medId',customerController.getById);

router.post('/addcart',auth.checkAuth, customerController.postCart);

router.delete('/removecart/:medicineId',auth.checkAuth,auth.isVerified,customerController.removeCart);

router.delete('/deletecart/:medicineId',auth.checkAuth,customerController.deleteCart);

router.get('/showcart',auth.checkAuth,auth.isVerified,customerController.showCart);



module.exports=router;