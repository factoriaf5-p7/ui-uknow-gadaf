import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

interface TokenContextData {
  isTokenValid: boolean | null;
}

interface TokenProviderProps {
  children: React.ReactNode;
}

const TokenContext = createContext<TokenContextData | undefined>(undefined)

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const token = localStorage.getItem('token')
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null)

  useEffect(() => {
    if (!token) {
      setIsTokenValid(false)
    } else {
      const verifyToken = async () => {
        try {
          const res = await axios.post('https://ui-uknow-gadaf-production.up.railway.app/api/auth/verify', { token })
          setIsTokenValid(res.data.verified)
        } catch (error) {
          setIsTokenValid(false)
        }
      }
      verifyToken()
    }
  }, [token])

  return (
    <TokenContext.Provider value={{ isTokenValid }}>
      {children}
    </TokenContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToken = (): TokenContextData => {
  const context = useContext(TokenContext)
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider')
  }
  return context
}
