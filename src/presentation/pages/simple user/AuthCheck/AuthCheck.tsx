import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { STRING_ROUTE_LOGIN } from '../../../utils/const';
// import { useNavigation } from 'react-router-dom';
const AuthCheck = ({children}) => {
 const isAuthenticate = false;
//  const navigate = useNavigation();
 if(!isAuthenticate){
    return <Navigate to={STRING_ROUTE_LOGIN} state={
      {
        from:location
      }
    }/>
 }
 return children
}

export default AuthCheck