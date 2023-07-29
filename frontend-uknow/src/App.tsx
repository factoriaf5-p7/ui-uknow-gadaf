import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import CourseDetail from './components/CourseDetail/CourseDetail'
import { AddCoursePage } from './pages/AddCoursePage'
import { AllUsersPage } from './pages/AllUsersPage'
import { Auth } from './pages/Auth/Auth'
import { CoursePage } from './pages/CoursePage'
import { HomePage } from './pages/HomePage/HomePage'
import PrivateRoute from './routeGuard'
import { Profile } from './components/Profile/Profile'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/course' element={<PrivateRoute element={<CoursePage />} />} />
        <Route path='/addcourse' element={<PrivateRoute element={<AddCoursePage />} />} />
        <Route path='/allusers' element={<AllUsersPage />} />
        <Route path='/profile' element={<PrivateRoute element={<Profile />} />} />
        <Route path='/course/:id' element={<PrivateRoute element={<CourseDetail />} />} />
      </Routes>
    </>
  )
}

export default App
