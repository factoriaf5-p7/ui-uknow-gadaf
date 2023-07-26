import { createBrowserRouter, useRouteError } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage/LandingPage'
import { HomePage } from '../pages/HomePage'
import { Auth } from '../pages/Auth/Auth'
import { CoursePage } from '../pages/CoursePage'
import { AddCoursePage } from '../pages/AddCoursePage'
import { AllUsersPage } from '../pages/AllUsersPage'

const ErrorPage = () => {
  const error:any = useRouteError()
  console.error(error)

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/course',
    element: <CoursePage />
  },
  {
    path: '/addcourse',
    element: <AddCoursePage />
  },
  {
    path: '/allusers',
    element: <AllUsersPage />
  },
])
