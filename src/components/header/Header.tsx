import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Makeenquiry from '../makeenquiry/Makeenquiry';
import Bookaservice from '../bookaservice/Bookaservice';
import './header.css';

const Header = () => {
  return (
    <div id='headerpage'>
     <Navbar  expand="lg" fixed="top" style={{backgroundColor: "#BAD0E3"}}>
      <Container fluid>
        <Navbar.Brand className='ms-5' href="#"
          >
        <img 
        src="./img/jakpalogo2.png" 
        alt="jakpa logo"  
        width="170"
        height="auto"
        className="d-inline-block align-top"
        />  
        <a href="https://doyenify.com/" style={{textDecoration:"none"}} target='#blank' >
        <h5 style={{color:"#044163", fontSize:"12px"}} className='poweredbydoyenify-header'> Powered by doyenify </h5>
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
          </Nav>
          <div className='pe-5 header-btn-container'>
            <Button className='mx-2 doyacad'>Doyenify Academy</Button>
            <Makeenquiry/>
            <Bookaservice/>
            {/* <Button className='mx-2'  style={{backgroundColor: "#044163"}}>Make An Enquiry</Button> */}
            {/* <Button  className='mx-2' style={{backgroundColor: "#044163"}}> Book A Service</Button> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header