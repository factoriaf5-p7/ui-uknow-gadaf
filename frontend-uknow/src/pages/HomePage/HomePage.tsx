import { AllCourses } from '../../components/AllCourses/AllCourses'
import { Categories } from '../../components/Categories/Categories'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { NavbarBottom } from '../../components/NavbarBottom/NavbarBottom'
import { NavbarDesk } from '../../components/NavbarDesk/NavbarDesk'
import { PopularCourses } from '../../components/PopularCourses/PopularCourses'
import { PopularTopics } from '../../components/PopularTopics/PopularTopics'

export function HomePage () {
  return (
    <>
      <NavbarDesk />
      <Header />
      <Categories />
      <PopularCourses />
      <PopularTopics />
      <AllCourses />
      <NavbarBottom />
      <Footer />
    </>
  )
}
