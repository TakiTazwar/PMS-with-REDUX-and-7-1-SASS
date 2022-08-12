import React from 'react'
import Label from '../../atom/lablel';
import { useForm} from 'react-hook-form';
import Button from '../../atom/submitButton';
import Input from '../../atom/input';
import loginAPI from '../../../services/API/Login';

import {useDispatch, useSelector} from "react-redux";
import { addAmount } from '../../../services/Redux/user/reducers/userSlice';
import { useNavigate } from 'react-router-dom';

import userActions from '../../../services/Redux/user/Actions/userAction';

function LoginForm() {
  const { user } = useSelector(state=>state.user);
  const dispatch = useDispatch();
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
      const loginData=await loginAPI(data);
      userActions.addUser(loginData,dispatch)
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
      alert("Server Error");
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      
      <Label class="login-form__label" name="Email"></Label>
      <Input class="login-form__input" name="Email" formFunc={register('email',  { required: true , pattern:/[\w-]+@([\w-]+\.)+[\w-]+/})}/>
      {errors.email && errors.email.type=="pattern"&& <Label class="login-error" name="Please Enter a Valid Email"></Label>}
      {errors.email && errors.email.type=="required" && <Label class="login-error" name="Email Cannot be empty"></Label>}

      <Label class="login-form__label" name="Password"></Label>
      <Input class="login-form__input" name="Password" formFunc={register('password',  { required: true,pattern:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/})}/>
      {errors.password && errors.password.type=="pattern"&& <Label class="login-error" name="Please Enter a Valid Password"></Label>}
      {errors.password && errors.password.type=="required" && <Label class="login-error" name="Password Cannot be empty"></Label>}

      <Button class="login-form__button" name="Login"></Button>
    </form>
  )
}

export default LoginForm;