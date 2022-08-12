import React from 'react'
import Label from '../../atom/lablel';
import { useForm} from 'react-hook-form';
import Button from '../../atom/submitButton';
import Input from '../../atom/input';

import { useNavigate } from 'react-router-dom';
import resetPasswordMailAPI from '../../../services/API/resetPassword';

function ResetPasswordMailForm() {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm( {
    mode: "onChange"
  });

  const  onSubmit =  async (data) => {
    try{
        const resetData=await resetPasswordMailAPI(data);
        if(resetData.success==true)
        {
            alert("Success");
        }
        else
        {
            alert("Failed");
        }
        navigate("/login");
        
    }
    catch(error)
    {
      alert("Server Error");
    }
  }

  return (
    <form className="reset-pass-form" onSubmit={handleSubmit(onSubmit)}>
      
      <Label class="reset-pass-form__label" name="Email"></Label>
      <Input class="reset-pass-form__input" name="Email" formFunc={register('email',  { required: true , pattern:/[\w-]+@([\w-]+\.)+[\w-]+/})}/>
      {errors.email && errors.email.type=="pattern"&& <Label class="validation-error" name="Please Enter a Valid Email"></Label>}
      {errors.email && errors.email.type=="required" && <Label class="validation-error" name="Email Cannot be empty"></Label>}


      <Button class="reset-pass-form__button" name="Reset Password"></Button>
    </form>
  )
}

export default ResetPasswordMailForm;