import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./hero.css";

const Hero = () => {
  return (
    <div>
      <div className='hero-card-container' style={{backgroundColor: "#121212"}}>
      <Card className="mt-1  bg-dark text-white" style={{ borderRadius: "0px", height: "100vh" }}>
      <Card.Img src="./img/hero.png" alt="Card image" style={{ height: "100%", objectFit: "cover"}}/>
      <Card.ImgOverlay className='px-5 d-flex flex-column align-items justify-content-center'>
        <Card.Title className="hero-title" style={{ fontSize:"2.5rem" }}>Moving To Greener Pastures Is Not <br /> 
         An Escape From Your Current Situation, <br />  But Rather A Step Towards Your Desired <br /> Destination
        </Card.Title>
        <div className='mt-3 hero-btn'>
            <Button  className='hero-about-btn  px-5 ' href='#aboutuspage' style={{backgroundColor: "#044163"}}>About Us</Button>
            <Button  className='hero-offer-btn mx-2 px-5' href='#whatweoffer' style={{backgroundColor: "transparent"}}>What We Offer</Button>
          </div>
      </Card.ImgOverlay>
    </Card>
    </div>
    </div>
  )
}

export default Hero