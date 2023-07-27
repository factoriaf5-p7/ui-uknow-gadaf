import { AllCourses } from '../../components/AllCourses/AllCourses'
import { Categories } from '../../components/Categories/Categories'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { NavbarBottom } from '../../components/NavbarBottom/NavbarBottom'
import { NavbarDesk } from '../../components/NavbarDesk/NavbarDesk'
import { PopularCourses } from '../../components/PopularCourses/PopularCourses'

export function HomePage () {
  return (
    <div>
      <NavbarDesk />
      <Header />
      <Categories />
      <PopularCourses />
<<<<<<< HEAD
      <PopularTopics />
      <AllCourses />
      <NavbarBottom />
      <Footer />
    </>
=======
      <AllCourses />
      <NavbarBottom />
    </div>
>>>>>>> f443afd03852b91dabaa1cd065567cdc98610bd0
  )
}
