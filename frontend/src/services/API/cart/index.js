import axios from 'axios';

async function addToCart(data,token)
{

    const headers={"Content-Type":"application/json","Authorization":"Bearer "+token};

    const post= await axios.post("http://localhost:5000/customer/addcart",data,{headers:headers});


    return post;

}

async function getCart(token)
{

    const headers={"Content-Type":"application/json","Authorization":"Bearer "+token};

    const post= await axios.get("http://localhost:5000/customer/showcart",{headers:headers});

     
    return post;

}

async function removeCart(data,token)
{

    const headers={"Content-Type":"application/json","Authorization":"Bearer "+token};

    const post= await axios.delete("http://localhost:5000/customer/deleteCart/"+data,{headers:headers});

    return post;

}

export default {addToCart,getCart,removeCart};