import { Categories } from '../components/Categories/Categories'
import { Header } from '../components/Header/Header'
import {NavbarBottom} from '../components/NavbarBottom/NavbarBottom'
import { NavbarDesk } from '../components/NavbarDesk/NavbarDesk'
import { PopularCourses } from '../components/PopularCourses/PopularCourses'

export function HomePage () {
  return (
    <>
      <NavbarDesk/>
      <Header/>
      <Categories />
      <PopularCourses />
      <NavbarBottom />
    </>
  )
}
