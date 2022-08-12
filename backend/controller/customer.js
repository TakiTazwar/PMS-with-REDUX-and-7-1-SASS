const medData = require('../model/medicine');
const {success,failed}=require('../utils/message');
const HTTP_STATUS =require('../utils/httpStatus');
const Cart = require('../model/cart');
const paginationSkip=require("../utils/pagination");
const queryFetch=require("../utils/queryRegex");
const orderStatus=require("../utils/orderStatus");
const orderData=require("../model/order");
const { validationResult } = require('express-validator');


const getAllMedicine=async(req,res,next)=>
{
    try
    {
        const searchQuery=queryFetch.queryFetchCustomer(req.query);
        const page = parseInt(req.query.page) >0 ? req.query.page : 1;
        const items =  parseInt(req.query.page)>0 ? req.query.items : 3;
        const {skipMed} = paginationSkip(page, items);

        const medicines = await medData.find(searchQuery).skip(skipMed).limit(items).exec();
        const totalItems = await medData.find(searchQuery).count().exec();
        res.status(HTTP_STATUS.OK).send(success("Got all medicine successfully",{totalItems,medicines}));
    }
    catch(error)
    {
        next(error);
    }
}

const getById=async (req,res,next)=>
{
    try
    {
        const medId = req.params.medId;
        const foundMedicine = await medData.findById(medId).exec();

        if(foundMedicine)
        {
            res.status(HTTP_STATUS.OK).send(success("The medicine returned Successfully",foundMedicine));
        }
        else
        {
            res.status(HTTP_STATUS.OK).send(failed("Medicine not found"));
        }
    }
    catch(error)
    {
        next(error);
    }
}

const postCart = async (req, res, next)=>
{
    try
    {
        let flag=false;
        const _id=req.body._id;
        const name = req.body.name;
        const price = req.body.price;
        const category = req.body.category;
        const company = req.body.company;
        const license = req.body.license;
        const country = req.body.country;
        const imageUrl = req.body.imageUrl;

        const userId=req.user._id;
        let cart = await Cart.findOne({userId:userId});

        if(cart == null)
        {
            cart = new Cart({userId: userId, medicines: []});
        }

        cart.medicines=cart.medicines.map(medicine=>{
            if(medicine.med._id.toString()==_id.toString())
            {
                flag=true;
                medicine.quantity+=1;
            }
            return medicine;
        });

        if(flag==false)
        {
            cart.medicines.push({med:{_id:_id,name:name,price:price,category:category,company:company,license:license,country:country,imageUrl:imageUrl},quantity:1})
        }

        await cart.save();

        return res.status(HTTP_STATUS.OK).send(success('Medicine is added to cart'));
    }
    catch(error)
    {
        next(error);
    }
}



const showCart = async (req, res, next)=>
{
    try 
    {
        const userId=req.user._id;
        const medicines = await Cart.findOne({userId: userId}).exec();
        return res.status(HTTP_STATUS.OK).send(success('Medicines are fetched from cart', medicines));
    } 
    catch (error) 
    {
        console.log(error);
        next(error);
    }
}

 const deleteCart= async  (req, res, next)=>
    {
        try 
        {
            const medicineId = req.params.medicineId;
            const userId=req.user._id;
            const cart = await Cart.findOne({ userId: userId }).exec();
            if (cart) 
            {
                cart.medicines=cart.medicines.filter(medicine=>
                {
                    if(medicine.med._id.toString()==medicineId.toString())
                    {
                        if(medicine.quantity==1)
                        {
                            return false;
                        }
                        else
                        {
                            medicine.quantity-=1;
                        }
                    }
                    return medicine;
                });
                await cart.save();

                return res.status(HTTP_STATUS.OK).send(success('Medicine is succesfully removed'));

            } 
            else 
            {
                return res.status(HTTP_STATUS.NOT_FOUND).send(failed("Cart doesn't exist!!"));
            }
        } 
        catch (error) {
            next(error);
        }
    }

const removeCart= async (req,res,next)=>
{
    try 
    {
        const medicineId = req.params.medicineId;
        const userId=req.user._id;
        const cart = await Cart.findOne({ userId: userId }).exec();
        if (cart) 
        {
            const delState=await cart.removeFromCart(medicineId);
            if(delState)
            {
                return res.status(HTTP_STATUS.OK).send(success('Medicine is removed from cart'));
            }
            else
            {
                return res.status(HTTP_STATUS.OK).send(failed('Medicine was not found'));
            }
        } 
        else 
        {
            return res.status(HTTP_STATUS.NOT_FOUND).send(failed("Cart doesn't exist!!"));
        }
    } 
    catch (error) 
    {
        next(error);
    }
}



module.exports = {
    getAllMedicine,
    getById,
    postCart,
    showCart,
    deleteCart,
    removeCart
}