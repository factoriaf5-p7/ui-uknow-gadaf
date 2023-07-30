import { useEffect } from 'react'

function useProtectedRoute () {
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      // Redirect the user to the login page or any other unauthorized page
      window.location.href = '/auth' // Change the URL as per your requirement
    } else {
      // Here, you can also check if the token is valid by verifying it with the server.
      // If the token is not valid, redirect the user to the login page as well.
    }
  }, [])
}

export default useProtectedRoute
