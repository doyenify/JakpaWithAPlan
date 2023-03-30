import Button from 'react-bootstrap/Button';
import {Facebook, Instagram, Linkedin, Twitter,Youtube} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='text-center d-flex flex-column align-items-center justify-content-center' style={{backgroundColor: "#BAD0E3", height: "400px"}}>
        <div className='' style={{color: "#044163"}}>
            <h5 >JakpaWithAPlan</h5>  
            <br /> 
        </div>
        <div style={{color: "#044163"}}>
            <p>“Cum nisl tellus risus bibendum vel. . Pellentesque suspendisse nunc proin ultrices <br /> 
                neque sagittis. Cum nisl tellus risus bibendum vel.  Pellentesque suspendisse <br /> 
                 nunc proin ultrices neque sagittis”</p>
        </div>
        <div>
        <a  className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}} ><Facebook className="footer-link" /> </a>
        <a  className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}}  ><Linkedin className="footer-link" /> </a>
        <a  className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}}  ><Twitter className="footer-link" /> </a>
        <a  className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}}  ><Instagram className="footer-link" /> </a>
        <a  className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}}  ><Youtube className="footer-link" /> </a>
        </div>
        <br />
        <div className=''>
            <Button className='mx-3 px-3 py-1' 
              style=
              {{backgroundColor: "transparent",
              color: "#044163",
              borderRadius: "50px",
              border: " 2px solid #044163",
              fontWeight: "600",}}
              >
                Home
            </Button>

            <Button className='mx-3 px-3' 
              style=
              {{backgroundColor: "transparent",
              color: "#044163",
              borderRadius: "50px",
              border: " 2px solid #044163",
              fontWeight: "600",}}
              >
                About Us
            </Button>

            <Button className='mx-3 px-3' 
              style=
              {{backgroundColor: "transparent",
              color: "#044163",
              borderRadius: "100px",
              border: " 2px solid #044163",
              fontWeight: "600",}}
              >
                Services
            </Button>
            <Button className='mx-3 px-3' 
              style=
              {{backgroundColor: "#044163",
              color: "#ffffff",
              borderRadius: "100px",
              border: " 2px solid #044163",
              fontWeight: "600",}}
              >
                Book A Service
            </Button>
        </div>
   </div>

  )
}

export default Footer