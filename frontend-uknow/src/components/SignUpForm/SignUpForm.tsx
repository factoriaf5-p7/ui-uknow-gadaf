import React from 'react'
import { ButtonP } from "../../components/ButtonP";
import { Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./SignUpForm.module.css";

export default function SignUpForm() {
  return (
    <div className={styles.signUpContainer}>
            <Form>
              <Form.Group className="mb-3">
                <div className="input-icon">
                  <Form.Control type="email" placeholder="Enter your name" />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  id={styles.textField}
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  id={styles.textField}
                  type="password"
                  placeholder="Confirm your password"
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
