import 'bootstrap/dist/css/bootstrap.min.css';
import { Display } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
     <Navbar  expand="lg" style={{backgroundColor: "#8CACD2"}}>
      <Container fluid>
        <Navbar.Brand className='ms-5' href="#" style={{color:"#ffffff", fontSize:"20px", fontWeight: "bold" }}>JakpaWithAPlan <br /> 
        <h5 style={{color:"#044163", fontSize:"12px"}}>Powered by Doyenify</h5> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
          </Nav>
          <div className='pe-5 header-btn-container'>
            <Button className='mx-2' style={{backgroundColor: "#044163"}}>Make An Enquiry</Button>
            <Button  className='mx-2' style={{backgroundColor: "#044163"}}> Book A Service</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header