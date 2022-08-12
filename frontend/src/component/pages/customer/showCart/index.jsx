import React, { useEffect, useState } from 'react';

import cartFun from '../../../../services/API/cart';

import {useSelector} from "react-redux";
import Label from '../../../atom/lablel';
import ShowCartSingle from '../../../organism/showCartSingle';

function ShowCart() {
    const [cart,setCart]=useState(null);
    const { user } = useSelector(state=>state.user);
    

    useEffect(()=>{
        const temp=cartFun.getCart(user.access_token);
        temp.then(res=>
        {
            setCart(res.data.data.medicines);
        }).catch(()=>alert("Server Error"));
    },[]);

  return (
    <div>
        <div className='show-image__main'>
            {cart?cart.map(medicine=>
            {
                return <ShowCartSingle totalMed={setCart} med={medicine} />
            }):<Label name="Loading"></Label>}
        </div>
    </div>
  )
}

export default ShowCart;