import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../../assets/images/logo.jpg'
import ButtonClick from '../../atom/button';

//import { logout } from '../../../services/Redux/user/reducers/userSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Label from '../../atom/lablel';

import userActions from '../../../services/Redux/user/Actions/userAction';

function Header() {
  const { user } = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  async function logoutUser() 
  {
    userActions.userRemove(dispatch);
    navigate("/login");
  }

  return (
    <div className='header'>
      <img className="header__logo" alt="Company Logo" src={logo}></img>
      

      {user?(user.type?<ButtonClick clickFun={logoutUser} class="header__logout" name="Logout" />:<Link className='link' to={"/login"}><Label class="link__text" name="Login"></Label> </Link>):<Link className='link' to={"/login"}><Label class="link__text" name="Login"></Label> </Link>}
      {console.log(user)}
    </div>
  )
}

export default Header;