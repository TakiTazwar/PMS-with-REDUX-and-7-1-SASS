import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Files from '../../../atom/files';
import Input from '../../../atom/input';
import Label from '../../../atom/lablel';
import Button from '../../../atom/submitButton';

import showMedicineApi from '../../../../services/API/showMedicines';

function EditMedicineForm() {

    const [editedMedicine,setEditedMedicine]=useState(null);

    const {id}= useParams();

    const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
    } = useForm( {
    mode: "onChange"
  });

  useEffect(_=>{
        const temp=showMedicineApi.showSingleMedicine(id);
        temp.then(res=>
        {
            setEditedMedicine(res.data.data);
        }).catch(()=>alert("Server Error"));
    },[]);

  const  onSubmit =  async (data) => {
    try{
        let formData= new FormData();
        let file=data.imageUrl[0];
        if(file)
        {
            
            formData.append('productImage',file);
        }

        formData.append('category',data.category);
        formData.append('company',data.company);
        formData.append('country',data.country);
        formData.append('license',data.license);
        formData.append('name',data.name);
        formData.append('price',data.price);
        const updated=showMedicineApi.editMedicine(id,formData);
        updated.then(res=>
        {
            console.log(res);
            navigate("/pharmacist");
        }
        ).catch(res=>alert("Cannot Edit The Medicine"))
    }
    catch(error)
    {
      alert("Server Error");
    }
  }

  return (
    <>
    {editedMedicine?
    <div>
        <form className="edit-medicine" onSubmit={handleSubmit(onSubmit)}>
            <Label class="edit-medicine__label" name="Medicine Name"></Label>
            <Input class="edit-medicine__input" prevVal={editedMedicine.name?editedMedicine.name:""} name="Name" formFunc={{...register('name',{required: true,pattern:/^[a-zA-Z0-9 ]+$/i} )}}/>
            {errors.name && errors.name.type=="pattern"&& <Label class="login-error" name="Please Enter a Valid Email"></Label>}
            {errors.name && errors.name.type=="required" && <Label class="login-error" name="Email Cannot be empty"></Label>}

            <Label class="edit-medicine__label" name="Medicine Price"></Label>
            <Input class="edit-medicine__input" prevVal={editedMedicine.price?editedMedicine.price:""} name="Medicine Price" formFunc={register('price',{required: true,pattern:/^[0-9]+$/i} )}/>
            {errors.price && errors.price.type=="pattern"&& <Label class="login-error" name="Please Enter a Valid Password"></Label>}
            {errors.price && errors.price.type=="required" && <Label class="login-error" name="Password Cannot be empty"></Label>}

            <Label class="edit-medicine__label" name="Medicine Category"></Label>
            <Input class="edit-medicine__input" prevVal={editedMedicine.category?editedMedicine.category:""} name="Medicine Category" formFunc={register('category',{required: true} )}/>
            {errors.category && errors.category.type=="required" && <Label class="login-error" name="Email Cannot be empty"></Label>}

            <Label class="edit-medicine__label" name="Medicine Company"></Label>
            <Input class="edit-medicine__input" prevVal={editedMedicine.name?editedMedicine.company:""} name="Medicine Company" formFunc={register('company',{required: true} )}/>
            {errors.company && errors.company.type=="required" && <Label class="login-error" name="Email Cannot be empty"></Label>}

            <Label class="edit-medicine__label" name="Medicine License"></Label>
            <Input class="edit-medicine__input" prevVal={editedMedicine.name?editedMedicine.license:""} name="Medicine License" formFunc={register('license',{required: true} )}/>
            {errors.license && errors.license.type=="required" && <Label class="login-error" name="Email Cannot be empty"></Label>}

            <Label class="edit-medicine__label" name="Medicine country"></Label>
            <Input class="edit-medicine__input" prevVal={editedMedicine.name?editedMedicine.country:""} name="Medicine country" formFunc={register('country',{required: true} )}/>
            {errors.country && errors.country.type=="required" && <Label class="login-error" name="Email Cannot be empty"></Label>}

            <Label class="edit-medicine__label" name="Medicine Image"></Label>
            <Files class="edit-medicine__input" name="Medicine Image" formFunc={register('imageUrl')}/>

            <Button class="edit-medicine__button" name="Edit Medicine"></Button>
        </form>
    </div>:<h1>Loading</h1>}

    </>
  )
}

export default EditMedicineForm;