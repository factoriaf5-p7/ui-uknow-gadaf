import { createBrowserRouter, useRouteError } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { HomePage } from './pages/HomePage/HomePage'
import { CoursePage } from './pages/CoursePage'
import { AddCoursePage } from './pages/AddCoursePage'
import { AllUsersPage } from './pages/AllUsersPage'
import { DeleteCourse } from './pages/DeleteCoursePage'
import { DeleteUser } from './pages/DeleteUsersPage'
import { Auth } from './pages/Auth/Auth'
import { Profile } from './pages/Profile'

const ErrorPage = () => {
  const error: any = useRouteError()
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
    path: '/addcourse',
    element: <AddCoursePage />
  },
  {
    path: '/allusers',
    element: <AllUsersPage />
  },
  {
    path: '/course',
    element: <CoursePage />
  },
  {
    path: '/deletecourse',
    element: <DeleteCourse courseId={'string'} />
  },
  {
    path: '/deleteuser',
    element: <DeleteUser userId={'number'} />
  },
  {
    path: '/profile',
    element: <Profile />
  },
])
