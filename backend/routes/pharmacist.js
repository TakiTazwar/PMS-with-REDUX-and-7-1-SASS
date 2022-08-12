const express = require('express');
const router = express.Router();
const PharmacistController=require('../controller/pharmacist');
const validator = require('../middlewares/validation');
const upload = require('../middlewares/addMedicineMulter');
const auth = require("../middlewares/auth");



router.post('/addmedicine',upload.single('productImage'), validator.createProduct, PharmacistController.createMedicine);

router.put('/editmedicine/:medId',upload.single('productImage'),PharmacistController.editMedicine);

router.delete('/deleteBook/:medId',PharmacistController.deleteMedicine);



module.exports=router;