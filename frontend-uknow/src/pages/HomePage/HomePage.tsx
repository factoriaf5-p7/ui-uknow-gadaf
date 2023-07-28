import { AllCourses } from '../../components/AllCourses/AllCourses'
import { Categories } from '../../components/Categories/Categories'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { NavbarBottom } from '../../components/NavbarBottom/NavbarBottom'
import { NavbarDesk } from '../../components/NavbarDesk/NavbarDesk'
import { PopularCourses } from '../../components/PopularCourses/PopularCourses'
import { PopularTopics } from '../../components/PopularTopics/PopularTopics'
import styles from './HomePage.module.css'

export function HomePage () {
  return (
    <div>
      <NavbarDesk />
      <Header />
      <div className={styles.homePageContainer}>
        <Categories />
        <PopularCourses />
        <PopularTopics />
        <AllCourses />
        <NavbarBottom />
        <Footer />
      </div>
    </div>
  )
}
