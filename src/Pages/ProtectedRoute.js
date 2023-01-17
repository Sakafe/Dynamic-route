import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({isLoggedin,children}) => {
 
    if(!isLoggedin) {

        return <Navigate to= '/' replace/>
    }
    return children ;
};
