import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import { Categories } from '../../components/Categories/Categories'
import { PopularCourses } from '../../components/PopularCourses/PopularCourses'
import { PopularTopics } from '../../components/PopularTopics/PopularTopics'
import { AllCourses } from '../../components/AllCourses/AllCourses'
import { Footer } from '../../components/Footer/Footer'
import { NavbarBottom } from '../../components/NavbarBottom/NavbarBottom'
import { NavbarDesk } from '../../components/NavbarDesk/NavbarDesk'
import { TokenProvider } from '../../context/TokenContext'

describe('HOMEPAGE', () => {
  describe('titles', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      )
    })

    test('renders section titles, Categories, Most Popular, All Courses', async () => {
      await waitFor(() => {
        const categoriesTitle = screen.getByText(/Categories/i)
        expect(categoriesTitle).toBeInTheDocument()

        const popularTitle = screen.getByText(/Most popular/i)
        expect(popularTitle).toBeInTheDocument()

        const allcoursesTitle = screen.getByText(/All Courses/i)
        expect(allcoursesTitle).toBeInTheDocument()
      })
    })
  })

  describe('render components de la homepage', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      )
    })
    test('component NavbarDesc mounts properly', () => {
      const wrapper = render(<TokenProvider><NavbarDesk /></TokenProvider>)
      expect(wrapper).toBeTruthy()
    })
    test('Component Categories mounts properly', () => {
      const wrapper = render(<Categories />)
      expect(wrapper).toBeTruthy()
    })
    test('Component PopularCouses mounts properly', () => {
      const wrapper = render(<PopularCourses />)
      expect(wrapper).toBeTruthy()
    })
    test('component PopularTopics mounts properly', () => {
      const wrapper = render(<PopularTopics />)
      expect(wrapper).toBeTruthy()
    })
    test('Component AllCouses mounts properly', () => {
      const wrapper = render(<AllCourses />)
      expect(wrapper).toBeTruthy()
    })
    test('component NavbarBottom mounts properly', () => {
      const wrapper = render(<NavbarBottom />)
      expect(wrapper).toBeTruthy()
    })
    test('component Footer mounts properly', () => {
      const wrapper = render(<Footer />)
      expect(wrapper).toBeTruthy()
    })
  })
})
