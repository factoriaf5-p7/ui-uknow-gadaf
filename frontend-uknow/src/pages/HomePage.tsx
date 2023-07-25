import { Categories } from '../components/Categories/Categories'
import {NavbarBottom} from '../components/NavbarBottom/NavbarBottom'
import { PopularCourses } from '../components/PopularCourses/PopularCourses'

export function HomePage () {
  return (
    <>
      
      <Categories />
      <PopularCourses />
      <NavbarBottom />
    </>
  )
}
