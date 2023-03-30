import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../hero/hero.css";

const Hero = () => {
  return (
    <div>
      <div className='hero-card-container' style={{backgroundColor: "#121212"}}>
      <Card className="mt-1  bg-dark text-white" style={{ borderRadius: "0px", height: "100vh" }}>
      <Card.Img src="./img/hero.png" alt="Card image" style={{ height: "100%", objectFit: "cover"}}/>
      <Card.ImgOverlay className='px-5 d-flex flex-column align-items justify-content-center'>
        <Card.Title style={{ fontSize:"48px" }}>Never Let Your Memory Be <br />
        Greater Than Your Dreams</Card.Title>
        <div className='mt-3'>
            <Button className='px-5' href='#' style={{backgroundColor: "#044163"}}>About Us</Button>
            <Button  className='mx-2 px-5' href='#' style={{backgroundColor: "transparent"}}> Book A Service</Button>
          </div>
      </Card.ImgOverlay>
    </Card>
    </div>
     
    </div>
  )
}

export default Hero