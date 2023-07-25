import { Link } from "react-router-dom"
import { ButtonP } from "../../components/ButtonP"
import { ButtonS } from "../../components/ButtonS"
import homework from "../../assets/homework.mp4"
import  { useState } from "react";
import styles from './LandingPage.module.css';
import Logo from "../../assets/LOGO.png"



export const LandingPage=()=> {

  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  const displayLogo = () => {}

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
      
      <img src={Logo} alt="U-know logo" />
      
      <div className={`${styles["buttons-container"]} ${videoEnded ? styles["translate-up"] : ""}`}>
        
      
        <p>Sign up and get 1000 knowlitos to get you started</p>
          <Link   to="/SignUp">
            <ButtonP className={styles.button} text={"Get Started"} />
          </Link>
          <Link  to="/home">
            <ButtonS className={styles.button} text={"Explore"} />
          </Link>
      </div>  
    </section>
  )
}
