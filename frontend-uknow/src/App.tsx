import { Route, Routes, useLocation } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { AddCoursePage } from './pages/AddCoursePage/AddCoursePage'
import { AllUsersPage } from './pages/Admin/AllUsersPage'
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
import { SearchContextProvider } from './SearchContext'

function Layout ({ children }: any) {
  return (
    <>
      <SearchContextProvider>
        <Header />
        <NavbarDesk />
        {children}
        <NavbarBottom />
        <Footer />
      </SearchContextProvider>
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
              <Route path='/mycourses' element={<PrivateRoute element={<MyCourses />} />} />
              <Route path='/addcourse' element={<PrivateRoute element={<AddCoursePage />} />} />
              <Route path='/allusers' element={<AllUsersPage />} />
              <Route path='/profile' element={<PrivateRoute element={<Profile />} />} />
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
