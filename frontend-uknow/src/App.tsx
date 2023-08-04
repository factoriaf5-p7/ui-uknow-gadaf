import { Route, Routes, useLocation } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { AddCoursePage } from './pages/AddCoursePage/AddCoursePage'
import { Auth } from './pages/Auth/Auth'
import { HomePage } from './pages/HomePage/HomePage'
import PrivateRoute from './routeGuard'
import { Profile } from './pages/ProfilePage/ProfilePage'
import { NavbarDesk } from './components/NavbarDesk/NavbarDesk'
import { Header } from './components/Header/Header'
import { NavbarBottom } from './components/NavbarBottom/NavbarBottom'
import { Footer } from './components/Footer/Footer'
import { FilterByCategory } from './components/FilterByCategory/FilterByCategory'
import { FilterByTopic } from './components/FilterByTopic/FilterByTopic'
import CoursePage from './pages/CoursePage/CoursePage'
import { MyCourses } from './pages/MyCourses/MyCourses'
import { TokenProvider } from './context/TokenContext'
import { Admin } from './pages/Admin/Admin'

function Layout ({ children }: any) {
  return (
    <>
      <TokenProvider>
        <Header />
        <NavbarDesk />
        {children}
        <NavbarBottom />
        <Footer />
      </TokenProvider>

    </>
  )
}

function App () {
  const location = useLocation()
  const isLandingPage = location.pathname === '/' || location.pathname === '/auth' || location.pathname === '/verysecretroute'

  return (
    <>
      <Routes>
        <Route path='/verysecretroute' element={<Admin />} />
      </Routes>
      {isLandingPage
        ? (
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
          )
        : (
          <Layout>
            <Routes>
              <Route path='/home' element={<HomePage />} />
              <Route path='/mycourses' element={<PrivateRoute><MyCourses /></PrivateRoute>} />
              <Route path='/addcourse' element={<PrivateRoute><AddCoursePage /></PrivateRoute>} />
              <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path='/course/:id' element={<CoursePage />} />
              <Route path='/category' element={<FilterByCategory />} />
              <Route path='/topic' element={<FilterByTopic />} />
            </Routes>
          </Layout>
          )}
    </>
  )
}

export default App
