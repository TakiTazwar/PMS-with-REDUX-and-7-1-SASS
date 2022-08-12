import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import showMedicineApi from '../../../../services/API/showMedicines';
import Label from '../../../atom/lablel';
import SingleMedicine from '../../../organism/singleMedicineList';

function ShowMedicine() {

    const [totalMedicine,setTotalMedicine]=useState(null);

    useEffect(()=>{
        const temp=showMedicineApi.getAllMedicine();
        temp.then(res=>
        {
            console.log(res.data.data);
            setTotalMedicine(res.data.data);
        }).catch(()=>alert("Server Error"));
    },[]);


  return (
    <div className='show-image'>
        <Link className='link show-image__create' to={"/add-medicine"}><Label class="link show-image__create__text" name="Add Medicine" /></Link>
        <div className='show-image__main'>
        {totalMedicine?totalMedicine.medicines.map(medicine=>
            {
                return <SingleMedicine totalMed={setTotalMedicine} med={medicine}></SingleMedicine>
            }):<Label name="Loading"></Label>}
        </div>
        
    </div>
  )
}

export default ShowMedicine;