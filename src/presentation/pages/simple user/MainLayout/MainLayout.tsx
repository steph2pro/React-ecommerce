import React from 'react'
import {STRING_ROUTE_USER, STRING_ROUTE_AUTH, STRING_ROUTE_LOGIN, STRING_ROUTE_CREATE_ACCOUNT, STRING_ROUTE_ERROR } from '../../../utils/const';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBare from '../components/NavBare'
import { LogIn } from 'lucide-react'
import Login from '../Pages/Auth/Login/Login'
import Index from '../HomePage'
import Auth from '../Pages/Auth/Register/Auth'
import CreateAccount from '../Pages/Auth/Register/CreateAccount'
import Error from '../Pages/Error/Error'
import HomePage from '../HomePage';

const MainLayout = () => {
  return (
    <>
    <HomePage/>
     
      
      <Routes>
        
        {/* <Route path={STRING_ROUTE_USER} element={<HomePage />} />npm  */}
      
        <Route path={STRING_ROUTE_AUTH} element={<Auth />}>
          <Route path={STRING_ROUTE_LOGIN} element={<Login />} />
          <Route path={STRING_ROUTE_CREATE_ACCOUNT} element={<CreateAccount />} />
        </Route>

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </>
 
  )
}

export default MainLayout
