import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
     <Navbar  expand="lg" style={{backgroundColor: "#8CACD2"}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"#044163", fontWeight: "40px"}}>JakpaWithAPlan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
          </Nav>
          <div>
            <Button className='' style={{backgroundColor: "#044163"}}>Make An Enquiry</Button>
            <Button  className='' style={{backgroundColor: "#044163"}}> Book A Service</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header