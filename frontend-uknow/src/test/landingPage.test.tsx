import React from 'react'
import { render } from '@testing-library/react'
import { LandingPage } from '../pages/LandingPage/LandingPage'
import '@testing-library/jest-dom/extend-expect'

test('video autoplays', () => {
  // Render the LandingPage component
  const { container } = render(<LandingPage />)

  // Assert that the video element has the "autoplay" attribute
  const videoElement = container.querySelector('.video')
  expect(videoElement).toHaveAttribute('autoplay')
})

test('buttons translate up after video ends', () => {
  // Render the LandingPage component
  const { container, rerender } = render(<LandingPage />)

  // Find the buttons-container element and ensure it doesn't have the "translate-up" class initially
  const buttonsContainer = container.querySelector('.buttons-container')
  expect(buttonsContainer).not.toHaveClass('translate-up')

  // Rerender the component with videoEnded set to true
  rerender(<LandingPage videoEnded />)

  // Assert that the buttons-container element now has the "translate-up" class
  expect(buttonsContainer).toHaveClass('translate-up')
})
