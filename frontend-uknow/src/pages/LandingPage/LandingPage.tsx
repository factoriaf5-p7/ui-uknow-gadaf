import { Link } from "react-router-dom"
import { ButtonP } from "../../components/ButtonP"
import { ButtonS } from "../../components/ButtonS"
import homework from "../../assets/homework.mp4"
import  { useEffect, useState } from "react";
import styles from './LandingPage.module.css';
import Logo from "../../assets/LOGO.png"



export const LandingPage=()=> {

  const [videoEnded, setVideoEnded] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    // Delay showing the logo for 500ms after the video ends
    if (videoEnded) {
      setTimeout(() => {
        setShowLogo(true);
      }, 150);
    }
  }, [videoEnded]);


  return (
    <section className={styles.hero}>
       <video
        className={styles.video}
        src={homework}
        autoPlay
        muted
        onEnded={handleVideoEnded}
      >
        Your browser does not support the video tag.
      </video>
      
      <div className={`${styles['logo-container']} ${showLogo ? styles['show-logo'] : ''}`}>
        <img src={Logo} alt="U-know logo" />
      </div>
      
      <div className={`${styles["buttons-container"]} ${videoEnded ? styles["translate-up"] : ""}`}>
        
      
        <p>Sign up and get 1000 knowlitos to get you started</p>
          <Link   to="/loginsignup">
            <ButtonP className={styles.button} text={"Get Started"} />
          </Link>
          <Link  to="/home">
            <ButtonS className={styles.button} text={"Explore"} />
          </Link>
      </div>  
    </section>
  )
}
