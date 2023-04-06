import Button from 'react-bootstrap/Button';
import {Facebook, Instagram, Linkedin, Twitter,Youtube} from 'react-bootstrap-icons';
import Bookaservice from '../bookaservice/Bookaservice';
import './footer.css';

const Footer = () => {
  return (
    <div className='text-center d-flex flex-column align-items-center justify-content-center' style={{backgroundColor: "#BAD0E3", height: "400px"}}>
        <div className='' style={{color: "#044163"}}>
            <h5 >JakpaWithAPlan</h5>  
            <br /> 
        </div>
        <div style={{color: "#044163"}}>
            <p>"Sometimes the biggest risk in life is not taking one. You only have one life to live, 
              and it's important to live it on your own terms. <br /> While it may be scary to leave your comfort 
              zone and the familiar, it's also an opportunity to grow and learn about yourself. <br />
              Don't let fear hold you back from learning and chasing your dreams. <br />
              Take the leap and see where it takes you."</p>
        </div>
        <div>
        <a href='https://twitter.com/home' className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}} ><Facebook className="footer-link" /> </a>
        <a  href='https://twitter.com/home' className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}}  ><Linkedin className="footer-link" /> </a>
        <a  href='https://twitter.com/home'className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}}  ><Twitter className="footer-link" /> </a>
        <a href='https://twitter.com/home' className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}}  ><Instagram className="footer-link" /> </a>
        <a href='https://twitter.com/home' className="mx-3" style={{color: "#044163", fontSize: "25px", textDecoration: "none"}}  ><Youtube className="footer-link" /> </a>
        </div>
        <br />
        <div className=''>
            <Button className='footer-home-btn mx-3 px-3 py-1' 
              href='#headerpage'
              style=
              {{backgroundColor: "transparent",
              color: "#044163",
              borderRadius: "50px",
              border: " 2px solid #044163",
              fontWeight: "600",}}
              >
                Home
            </Button>

            <Button className='footer-aboutus-btn mx-3 px-3' 
              href='#aboutuspage'
              style=
              {{backgroundColor: "transparent",
              color: "#044163",
              borderRadius: "50px",
              border: " 2px solid #044163",
              fontWeight: "600",}}
              >
                About Us
            </Button>

            <Button className='footer-service-btn mx-3 px-3' 
              href='#whatweoffer'
              style=
              {{backgroundColor: "transparent",
              color: "#044163",
              borderRadius: "100px",
              border: " 2px solid #044163",
              fontWeight: "600",}}
              >
                Services
            </Button>
            <Bookaservice/>
           
            <br />  
            <a href="https://doyenify.com/" style={{textDecoration:"none"}} target='#blank'>
            <div className='mt-5' style=
              {{color: "#044163",fontSize: "12px", fontWeight: "bold"}}  >   <h5>
             Powered by Doyenify </h5></div>
             </a>
             
        </div>
   </div>

  )
}

export default Footer