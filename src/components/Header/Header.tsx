import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-light fixed-top header">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/img/ImmunifyMelogo.svg"
            alt="Immunifyme logo"
            width="80%"
            height="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
            <Nav.Link href="/projects&impacts">Projects &amp; Impacts</Nav.Link>
            <Nav.Link href="https://immunifyme.com/blog/" target="blank">
              Blog
            </Nav.Link>
            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
