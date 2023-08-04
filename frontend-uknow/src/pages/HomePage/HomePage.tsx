import { AllCourses } from '../../components/AllCourses/AllCourses'
import { Categories } from '../../components/Categories/Categories'
import { PopularCourses } from '../../components/PopularCourses/PopularCourses'
import { PopularTopics } from '../../components/PopularTopics/PopularTopics'
import styles from './HomePage.module.css'

export function HomePage () {
  return (
    <div>
      <div className={styles.homePageContainer}>
        <Categories />
        <PopularCourses />
        <PopularTopics />
        <AllCourses />
      </div>
    </div>
  )
}
