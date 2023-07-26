import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HouseDoorFill } from 'react-bootstrap-icons';

export default function NavbarBottom() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="light" fixed="bottom">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home"><HouseDoorFill/></Nav.Link>
            <Nav.Link href="/addcourse">Add Course</Nav.Link>
            <Nav.Link href="/course">Courses</Nav.Link>
            <Nav.Link href="/loginsignup">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
