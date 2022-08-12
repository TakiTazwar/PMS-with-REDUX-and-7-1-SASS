import React from 'react'
import ButtonClick from '../../atom/button';
import Image from '../../atom/image';
import Label from '../../atom/lablel';
import cartFun from '../../../services/API/cart';
import {useSelector} from "react-redux";
import MedicineCard from '../../molecule/medicineCard';

function ShowCartSingle(props) {
  const { user } = useSelector(state=>state.user);
  async function add()
  {
    const temp=await cartFun.addToCart(props.med.med,user.access_token);
    if(temp.status==200)
    {
      refresh();
    }
  }

  async function remove()
  {
    const temp=await cartFun.removeCart(props.med.med._id,user.access_token);
    if(temp.status==200)
    {
      refresh();
    }
  }

  async function refresh()
  {
    const temp=cartFun.getCart(user.access_token);
    temp.then(res=>
    {
      props.totalMed(res.data.data.medicines);
    }).catch(()=>alert("Server Error"));
  }

  return (

    <div className='single-image'>
              
        <MedicineCard med={props.med.med}></MedicineCard>
        <Label class='single-image__label' name={"Quantity: "+props.med.quantity}></Label>

        <div className='single-image__buttons'>
          <ButtonClick clickFun={add} name="+"></ButtonClick>
          <ButtonClick clickFun={remove} name="-"></ButtonClick>
        </div>
    </div>
  )
}

export default ShowCartSingle;