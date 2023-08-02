import React from 'react'
import { Navigate } from 'react-router-dom'
import { useToken } from './context/TokenContext'

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isTokenValid } = useToken()

  if (isTokenValid === null) {
    return null
  } else if (isTokenValid === false) {
    return <Navigate to='/auth' />
  } else {
    return <>{children}</>
  }
}

export default PrivateRoute
