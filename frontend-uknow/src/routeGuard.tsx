import { Navigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface PrivateRouteProps {
    element: React.ReactNode;
  }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = sessionStorage.getItem('token')
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null)

  useEffect(() => {
    if (!token) {
      setIsTokenValid(false)
    } else {
      const verifyToken = async () => {
        try {
          const res = await axios.post('http://localhost:3000/api/auth/verify', { token })
          console.log(res.data)
          setIsTokenValid(true)
        } catch (error) {
          console.log(error)
          setIsTokenValid(false)
        }
      }
      verifyToken()
    }
  }, [token])

  if (isTokenValid === null) {
    return <Navigate to='/auth' />
  } else if (isTokenValid === false) {
    return <Navigate to='/auth' />
  } else {
    return <>{element}</>
  }
}

export default PrivateRoute
