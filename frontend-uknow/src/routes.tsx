import { createBrowserRouter, useRouteError } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { HomePage } from './pages/HomePage/HomePage'
import { CoursePage } from './pages/CoursePage'
import { AddCoursePage } from './pages/AddCoursePage/AddCoursePage'
import { AllUsersPage } from './pages/Admin/AllUsersPage'
import { DeleteCourse } from './pages/Admin/DeleteCoursePage'
import { DeleteUser } from './pages/Admin/DeleteUsersPage'
import { Auth } from './pages/Auth/Auth'
import { Profile } from './components/Profile/Profile'
import CourseDetail from './components/CourseDetail/CourseDetail'

// /*Permitir que solamente el usuario registrado pueda crear un curso */
// import express, { Request, Response } from 'express';
// import authMiddleware from '../pages/AuthMiddleware';

// // const router = express.Router();

// router.post('/create', authMiddleware, (_req: Request, res: Response) => {
//     res.json({ message: 'Curso creado exitosamente' });
// });

// export default router;
// /*Permitir que solamente el usuario registrado pueda crear un curso */

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
  {
    path: '/course/:id',
    element: <CourseDetail />
  }
])
