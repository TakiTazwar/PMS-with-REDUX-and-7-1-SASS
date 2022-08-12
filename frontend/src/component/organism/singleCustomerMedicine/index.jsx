import React from 'react'
import { Link } from 'react-router-dom';
import cartFun from '../../../services/API/cart';
import ButtonClick from '../../atom/button'
import Image from '../../atom/image'
import Label from '../../atom/lablel'
import MedicineCard from '../../molecule/medicineCard';

import {useSelector} from "react-redux";

function CustomerSingleMedicine(props) {

  const { user } = useSelector(state=>state.user);

  async function add()
  {
    const temp=await cartFun.addToCart(props.med,user.access_token);
    if(temp.status==200)
    {
      alert("Item added");
    }
  }

  return (
    <div className='single-image'>
      <MedicineCard med={props.med}></MedicineCard>

      <div className='single-image__buttons'>
        <ButtonClick clickFun={add} name="Add to cart"></ButtonClick>
      </div>

        
    </div>
  )
}

export default CustomerSingleMedicine;