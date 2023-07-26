import React from 'react'
import { ButtonP } from "../../components/ButtonP";
import { Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./LogInForm.module.css";

export default function LogInForm() {
  return (
    <div className={styles.logInContainer}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  id={styles.textField}
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Text id={styles.forgotPassword}>Forgot password?</Form.Text>

              <ButtonP text={"Log In"} />
            </Form>
          </div>
  )
}
