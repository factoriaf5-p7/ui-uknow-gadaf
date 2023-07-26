import { ChangeEvent, FormEvent, useState } from "react";
import { ButtonP } from "../../components/ButtonP";
import { Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./LogInForm.module.css";

export default function LogInForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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

        <ButtonP text={"Log In"} />
      </Form>
    </div>
  );
}
