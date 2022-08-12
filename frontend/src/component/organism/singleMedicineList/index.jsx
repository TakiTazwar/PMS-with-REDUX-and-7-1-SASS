import React from 'react'
import { Link } from 'react-router-dom'
import ButtonClick from '../../atom/button'
import Image from '../../atom/image'
import Label from '../../atom/lablel'
import Button from '../../atom/submitButton'
import MedicineCard from '../../molecule/medicineCard';
import showMedicineApi from '../../../services/API/showMedicines';

function SingleMedicine(props) {

  function deleteMedicine(e)
  {
    const deleteData=showMedicineApi.deleteMedicine(e.target.value);
    deleteData.then(res=>
    {
        const temp=showMedicineApi.getAllMedicine();
        temp.then(res=>
        {
            console.log(res.data.data);
            props.totalMed(res.data.data);
        }).catch(()=>alert("Server Error"));
    }).catch(()=>alert("Server Error"));
  }

  
  return (
    <div className='single-image'>
        <MedicineCard med={props.med}></MedicineCard>

        <div className='single-image__buttons'>
            <Link className='link' to={"/edit-medicine/"+props.med._id}><Button name="Edit"></Button></Link>
            <ButtonClick clickFun={deleteMedicine} val={props.med._id} name="Delete"></ButtonClick>
        </div>

        
    </div>
  )
}

export default SingleMedicine