import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {

    console.log(children);
 

    return <>{children}</>
}