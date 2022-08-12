import React from 'react'
import Label from '../../atom/lablel';
import { useForm} from 'react-hook-form';
import Button from '../../atom/submitButton';
import Input from '../../atom/input';

import {useDispatch, useSelector} from "react-redux";
import { addAmount } from '../../../services/Redux/user/reducers/userSlice';
import { useNavigate } from 'react-router-dom';

import registerAPI from "../../../services/API/Registration";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm( {
    mode: "onChange"
  });

  const navigate=useNavigate();

  const { user } = useSelector(state=>state.user);
  const dispatch = useDispatch();

  const  onSubmit =  async (data) => {
    try{
      data.type="customer";
      const loginData=await registerAPI(data);
      dispatch(addAmount(loginData));
      if(loginData.admin==true)
      {
        navigate("/pharmacist");
      }
      else if(loginData.type=="customer")
      {
        navigate("/customer");
      }
    }
    catch(error)
    {
      alert("server error");
    }
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <Label class="registration-form__label" name="Name"></Label>
      <Input class="registration-form__input" name="Name" formFunc={register('name',  { required: true , pattern:/[a-zA-Z]+/})}/>
      {errors.name && errors.name.type=="pattern"&& <Label class="registration-error" name="Enter a valid Name"></Label>}
      {errors.name && errors.name.type=="required" && <Label class="registration-error" name="Name Cannot be empty"></Label>}


      <Label class="registration-form__label" name="Email"></Label>
      <Input class="registration-form__input" name="Email" formFunc={register('email',  { required: true , pattern:/[\w-]+@([\w-]+\.)+[\w-]+/})}/>
      {errors.email && errors.email.type=="pattern"&& <Label class="registration-error" name="Please Enter a Valid Email"></Label>}
      {errors.email && errors.email.type=="required" && <Label class="registration-error" name="Email Cannot be empty"></Label>}

      <Label class="registration-form__label" name="Password"></Label>
      <Input class="registration-form__input" name="Password" formFunc={register('password',  { required: true,pattern:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/})}/>
      {errors.password && errors.password.type=="pattern"&& <Label class="registration-error" name="Please Enter a Valid Password"></Label>}
      {errors.password && errors.password.type=="required" && <Label class="registration-error" name="Password Cannot be empty"></Label>}

      <Label class="registration-form__label" name="Confirm Password"></Label>
      <Input class="registration-form__input" name="Confirm Password" formFunc={register("confirm_password", { required: true,
          validate: (val) => {
            if (watch('password') != val) {
              return false;
            }
          },
        })}/>
      {errors.confirm_password && errors.confirm_password.type=="validate"&& <Label class="registration-error" name="Your passwords do no match"></Label>}
      {errors.confirm_password && errors.confirm_password.type=="required" && <Label class="registration-error" name="Confirm Password Cannot be Empty"></Label>}
      
      <Label class="registration-form__label" name="Phone Number"></Label>
      <Input class="registration-form__input" name="Phone Number" formFunc={register('phoneNumber',  { required: true , pattern:/[0-9]+/})}/>
      {errors.phoneNumber && errors.phoneNumber.type=="pattern"&& <Label class="registration-error" name="Enter a valid phoneNumber"></Label> }
      {errors.phoneNumber && errors.phoneNumber.type=="required" && <Label class="registration-error" name="Name cannot be phoneNumber"></Label> }

      <Button class="registration-form__button" name="Sign Up"></Button>
    </form>
  )
}

export default RegistrationForm;