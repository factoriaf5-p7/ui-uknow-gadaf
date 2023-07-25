import { Link } from 'react-router-dom'
import { ButtonP } from '../components/ButtonP'
import { ButtonS } from '../components/ButtonS'
import homework from '../assets/homework.mp4'
import { useState } from 'react'
import './LandingPage.css'
import Logo from '../assets/2Logo.png'

export const LandingPage = () => {
  const [videoEnded, setVideoEnded] = useState(false)

  const handleVideoEnded = () => {
    setVideoEnded(true)
  }

  return (
    <section className='hero'>
      <video
        className='video'
        src={homework}
        autoPlay
        muted
        onEnded={handleVideoEnded}
      >
        Your browser does not support the video tag.
      </video>
      <video className='videobg' src={homework}>
        Your browser does not support the video tag.
      </video>
      <div className={`buttons-container ${videoEnded ? "translate-up" : ""}`}>
        <img src={Logo} alt="U-know logo" />
        <div className={'buttons'}>
          <Link to="/LogInSignUp">
            <ButtonP text={"Get Started"} />
          </Link>
          {' '}
          <Link to="/home">
            <ButtonS text={"Explore"} />
          </Link>
        </div>
      </div>
    </section>
  )
}
