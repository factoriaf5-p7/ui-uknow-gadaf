import { ChangeEvent, FormEvent, useState } from "react"
import { ButtonP } from "../../components/ButtonP";
import { Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./SignUpForm.module.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const SignUpForm=()=> {

  const navigate = useNavigate()
  const initialState ={
    email:'',
    password:'',
    name:'',
    last_name:''
  }
  const [ formData, setFormData] = useState({ 
    email: "",
    password: "",
    name:'',
    last_name:''
   })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form submitted!")
    console.log(formData)
    const response = await axios.post(
      'http://localhost:3000/api/auth/signup',
      formData, 
      {headers:
        {"Content-Type": "application/JSON"}
      })
    console.log(response.data)
    // localStorage.setItem('token',response.data.data);
    navigate('/profile')
    setFormData(initialState);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ 
      ...formData,
      [event.target.name]: event.target.value }
      );
  };

  return (
    <div className={styles.signUpContainer}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <div className="input-icon">
                  <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  onChange={handleChange}
                  value={formData.email}
                  name="email" />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                name='name'
                onChange={handleChange}
                value={formData.name}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id={styles.textField}
                  type="text"
                  placeholder="Enter your last name"
                  name= 'last_name'
                  onChange={handleChange}
                  value={formData.last_name}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  type="password"
                  id={styles.textField}
                  placeholder="Enter your password"
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="By signing you agree to our Terms of service and Privacy policy"
                  style={{ fontSize: "12px", color: "#777777" }}
                />
              </Form.Group>

              <ButtonP text={"Sign Up"} />
            </Form>
          </div>
  )
}
