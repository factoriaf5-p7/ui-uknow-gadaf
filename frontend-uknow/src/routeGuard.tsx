import { Navigate } from 'react-router-dom'
import React from 'react'

interface PrivateRouteProps {
    element: React.ReactNode;
  }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = sessionStorage.getItem('token')
  return token !== null ? <>{element}</> : <Navigate to='/auth' />
}

export default PrivateRoute
