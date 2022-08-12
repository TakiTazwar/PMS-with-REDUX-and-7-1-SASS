import React from 'react';
import {Routes,Route} from 'react-router-dom';
import ShowCart from '../../component/pages/customer/showCart';
import CustomerShowMedicine from '../../component/pages/customer/showMedicine';
import Footer from '../../component/pages/footer';
import Header from '../../component/pages/header';
import Login from '../../component/pages/login';
import AddMedicine from '../../component/pages/pharmacist/addMedicine';
import EditMedicine from '../../component/pages/pharmacist/editMedicine';
import ShowMedicine from '../../component/pages/pharmacist/showMedicine';
import Registration from '../../component/pages/registration';
import ResetMail from '../../component/pages/resetMail';
import ResetPassword from '../../component/pages/resetPassword';
import ProtectedRoute from '../ProtectedRoute';



function Main() {
  return (
    <>
      <Header></Header>
      <div className='main-component'>
        <Routes>
            <Route path='/login' element={<Login></Login>}> </Route>
            <Route path='/registration' element={<Registration></Registration>}> </Route>
            <Route path='/reset-password' element={<ResetMail></ResetMail>}> </Route>
            <Route path='/user/passwordreset/:resetToken/:userId' element={<ResetPassword></ResetPassword>}> </Route>
            <Route path='/pharmacist' element={<ProtectedRoute><ShowMedicine></ShowMedicine></ProtectedRoute>}> </Route>
            <Route path='/edit-medicine/:id' element={<ProtectedRoute><EditMedicine></EditMedicine></ProtectedRoute>}> </Route>
            <Route path='/add-medicine' element={<ProtectedRoute><AddMedicine></AddMedicine></ProtectedRoute>}></Route>
            <Route path='/customer' element={<CustomerShowMedicine></CustomerShowMedicine>}></Route>
            <Route path='/cart' element={<ShowCart></ShowCart>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>

  )
}

export default Main;