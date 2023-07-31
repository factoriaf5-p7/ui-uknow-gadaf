import { Route, Routes, useLocation } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import CourseDetail from './components/CourseDetail/CourseDetail'
import { AddCoursePage } from './pages/AddCoursePage'
import { AllUsersPage } from './pages/AllUsersPage'
import { Auth } from './pages/Auth/Auth'
import { CoursePage } from './pages/CoursePage'
import { HomePage } from './pages/HomePage/HomePage'
import PrivateRoute from './routeGuard'
import { Profile } from './pages/ProfilePage/ProfilePage'
import { NavbarDesk } from './components/NavbarDesk/NavbarDesk'
import { Header } from './components/Header/Header'
import { NavbarBottom } from './components/NavbarBottom/NavbarBottom'
import { Footer } from './components/Footer/Footer'
import { FilterByCategory } from './components/FilterByCategory/FilterByCategory'
import { FilterByTopic } from './components/FilterByTopic/FilterByTopic'

function Layout ({ children }:any) {
  return (
    <>
      <Header />
      <NavbarDesk />
      {children}
      <NavbarBottom />
      <Footer />
    </>
  )
}

function App () {
  const location = useLocation()
  const isLandingPage = location.pathname === '/' || location.pathname === '/auth'

  return (
    <>
      {isLandingPage
        ? (
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>)
        : (
          <Layout>
            <Routes>
              <Route path='/home' element={<HomePage />} />
              <Route path='/course' element={<PrivateRoute element={<CoursePage />} />} />
              <Route path='/addcourse' element={<PrivateRoute element={<AddCoursePage />} />} />
              <Route path='/allusers' element={<AllUsersPage />} />
              <Route path='/profile' element={<PrivateRoute element={<Profile />} />} />
              <Route path='/course/:id' element={<CourseDetail />} />
              <Route path='/category' element={<FilterByCategory />} />
              <Route path='/topic' element={<FilterByTopic />} />
            </Routes>
          </Layout>
          )}
    </>
  )
}

export default App
