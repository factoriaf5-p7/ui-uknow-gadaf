<<<<<<< HEAD
import { ChangeEvent, FormEvent, useState } from "react"
=======
import { ChangeEvent, FormEvent, useState } from "react";
>>>>>>> origin/homePage
import { ButtonP } from "../../components/ButtonP";
import { Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./LogInForm.module.css";
<<<<<<< HEAD
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LogInForm=()=> {

  const navigate = useNavigate()
  const initialState ={email:'',password:''}
  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form submitted!")
    console.log(formData)
    const response = await axios.post(
      'http://localhost:3000/api/auth/login',
      formData, 
      {headers:
        {"Content-Type": "application/JSON"}
      })
    console.log(response.data)
    localStorage.setItem('token',response.data.data);
    navigate('/home')
    setFormData(initialState);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ 
      ...formData,
      [event.target.name]: event.target.value }
      );
=======

export default function LogInForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
>>>>>>> origin/homePage
  };

  return (
    <div className={styles.logInContainer}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Enter your password"
            id={styles.textField}
          />
        </Form.Group>

        <Form.Text id={styles.forgotPassword}>Forgot password?</Form.Text>

<<<<<<< HEAD
        <ButtonP text={"Log In"} type='submit'/>
      </Form>
      
   
=======
        <ButtonP text={"Log In"} />
      </Form>
>>>>>>> origin/homePage
    </div>
  );
}
