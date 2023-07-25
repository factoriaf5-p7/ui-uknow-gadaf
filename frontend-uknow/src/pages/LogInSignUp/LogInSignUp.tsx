import styles from "./LogInSignUp.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Form } from "react-bootstrap";
import { ButtonP } from "../../components/ButtonP";

export const LogInSignUp = () => {
  return (
    <div className={styles.content}>
      <div className={styles.topContainer}>
        <h2 id={styles.welcome}>Welcome to</h2>
        <div>Logo</div>
        <p>Please enter your details</p>
      </div>

      <div className={styles.tabs}>
        <div className={styles.tab}>
          <p>Log In</p>
        </div>
        <div className={styles.tab}>
          <p>Sign Up</p>
        </div>
      </div>

      <div className={styles.bottomContainer}>
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
    </div>
  );
};

{
  /* <i className="bi bi-envelope"></i>
         
         <i className="bi bi-lock"></i>
    */
}

{
  /* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */
}
