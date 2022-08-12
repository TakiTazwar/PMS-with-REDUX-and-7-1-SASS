import React from 'react'
import Label from '../../atom/lablel'
import RegistrationForm from '../../molecule/registrationForm'

import '../../../style/main.css';
import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div>
        <Label class="registration-header" name="Registration"></Label>
        <RegistrationForm></RegistrationForm>
        <Link className='link' to={"/login"}> <Label class="link__text" name="Go To Login"></Label></Link>
    </div>
  )
}

export default Registration