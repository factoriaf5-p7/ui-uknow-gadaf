import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = localStorage.getItem('token')
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null)

  useEffect(() => {
    if (!token) {
      setIsTokenValid(false)
    } else {
      const verifyToken = async () => {
        try {
          const res = await axios.post('http://localhost:3000/api/auth/verify', { token })
          setIsTokenValid(res.data.verified)
        } catch (error) {
          setIsTokenValid(false)
        }
      }
      verifyToken()
    }
  }, [token])

  if (isTokenValid === null) {
    return null
  } else if (isTokenValid === false) {
    return <Navigate to='/auth' />
  } else {
    return <>{element}</>
  }
}

export default PrivateRoute
