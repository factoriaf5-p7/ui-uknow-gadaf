import { Categories } from '../components/Categories/Categories'
import { Header } from '../components/Header/Header'
import {NavbarBottom} from '../components/NavbarBottom/NavbarBottom'
import { PopularCourses } from '../components/PopularCourses/PopularCourses'

export function HomePage () {
  return (
    <>
      <Header/>
      <Categories />
      <PopularCourses />
      <NavbarBottom />
    </>
  )
}
