import { Link } from "react-router-dom"
import { ButtonP } from "../components/ButtonP"
import { ButtonS } from "../components/ButtonS"
import {SignUp} from "./SignUp"



export const LandingPage=()=> {
  return (
    <>
      <Link to='/SignUp'>
        <ButtonP text={'Get Started'} />
      </Link>
      <Link to='/home'>
        <ButtonS text={'Explore'}/>
      </Link>    
    </>
  )
}
