import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import resetPasswordAPI from '../../../services/API/resetPasswordConfirm';
import Input from '../../atom/input';
import Label from '../../atom/lablel';
import Button from '../../atom/submitButton';



function ResetPasswordForm() {
    const {resetToken,userId}= useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
      } = useForm( {
        mode: "onChange"
      });

    const navigate=useNavigate();

    const  onSubmit =  async (data) => {
        try{
            const password=data.password;
            const confirmPassword=data.confirm_password;
            data={
                password:password,
                confirmPassword:confirmPassword,
                resetToken:resetToken,
                userId:userId
    
            }
          const resetData=await resetPasswordAPI(data);
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
          alert("server error");
        }
      }
  return (
    <div>
        <form className="reset-password-form" onSubmit={handleSubmit(onSubmit)}>

            <Label class="reset-password-form__label" name="Password"></Label>
            <Input class="reset-password-form__input" name="Password" formFunc={register('password',  { required: true,pattern:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/})}/>
            {errors.password && errors.password.type=="pattern"&& <Label class="validation-error" name="Please Enter a Valid Password"></Label>}
            {errors.password && errors.password.type=="required" && <Label class="validation-error" name="Password Cannot be empty"></Label>}

            <Label class="reset-password-form__label" name="Confirm Password"></Label>
            <Input class="reset-password-form__input" name="Confirm Password" formFunc={register("confirm_password", { required: true,
                validate: (val) => {
                    if (watch('password') != val) {
                    return false;
                    }
                },
                })}/>
            {errors.confirm_password && errors.confirm_password.type=="validate"&& <Label class="validation-error" name="Your passwords do no match"></Label>}
            {errors.confirm_password && errors.confirm_password.type=="required" && <Label class="validation-error" name="Confirm Password Cannot be Empty"></Label>}
            

            <Button class="reset-password-form__button" name="Sign Up"></Button>
        </form>
    </div>
  )
}

export default ResetPasswordForm;