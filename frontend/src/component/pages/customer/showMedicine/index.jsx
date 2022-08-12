import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import showMedicineApi from '../../../../services/API/showMedicines';
import Label from '../../../atom/lablel';
import CustomerSingleMedicine from '../../../organism/singleCustomerMedicine';

function CustomerShowMedicine() {

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
        <Link className='links' to={"/cart"}><Label name="Go To Cart" /> </Link>
        <div className='show-image__main'>
            {totalMedicine?totalMedicine.medicines.map(medicine=>
            {
                return <CustomerSingleMedicine totalMed={setTotalMedicine} med={medicine}></CustomerSingleMedicine>
            }):<Label name="Loading"></Label>}
        </div>
    </div>
  )
}

export default CustomerShowMedicine;