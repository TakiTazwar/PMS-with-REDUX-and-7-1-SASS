import React from 'react'
import { Link } from 'react-router-dom';
import Label from '../../atom/lablel';
import LoginForm from '../../molecule/loginForm';

function Login() {
  return (
    <div className='login'>
        <LoginForm></LoginForm>
        <Link className='link' to={"/registration"}><Label class="link__text" name="Sign Up"></Label> </Link>
        <Link className='link' to={"/reset-password"}><Label class="link__text" name="Reset Password"></Label> </Link>
    </div>
  )
}

export default Login;