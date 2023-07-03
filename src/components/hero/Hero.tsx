import { Card, Button } from "react-bootstrap";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./hero.css";

const Hero = () => {
  return (
    <div>
      <Carousel >
              <Carousel.Item >
              <div className = "cardcon"  >
                <img src="./img/hero.png" alt="...">

                </img>
                  <Carousel.Caption className='caption carousel-div'>
                    <br/>
                    <br/>
                    <div className='hero-card-container '>
                    <Card className="bg-transparent  bg-dark text-white " style={{padding: "0", borderColor: "#ffffff00"}}>
                    <Card.Title className="hero-title text-width">Moving To Greener Pastures Is Not <br /> 
                      An Escape From Your Current Situation, <br />  But Rather A Step Towards Your Desired <br /> Destination
                      </Card.Title>
                      <div className='mt-3 hero-btn'>
                          <Button  className='hero-about-btn  px-5 ' href='#aboutuspage' style={{backgroundColor: "#044163"}}>About Us</Button>
                          <Button  className='hero-offer-btn mx-2 px-5' href='#whatweoffer' style={{backgroundColor: "transparent"}}>What We Offer</Button>
                        </div>
                    
                  </Card>
                  </div>
                    
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item >
              <div className = "cardcon"  >
                <img src="./img/doyenacademy.png" className="cimg" alt="...">

                </img>
                  <Carousel.Caption className='caption carousel-div'>
                    <br/>
                    <br/>
                    <div className='hero-card-container '>
                    <Card className="bg-transparent  bg-dark text-white " style={{padding: "0", borderColor: "#ffffff00"}}>
                    <div className="doyenifyacd-text" >Doyenify Academy</div>
                    <Card.Title className="hero-title text-width2">At this Academy we offer you courses that will help you thrieve in the job market,
                    <br /> You don't have to be great to start, <br />but you have to start to be great - zig Ziglar.
                    </Card.Title>
                      <div className='mt-3 hero-btn'>
                          <Button  className='doyenifyacd-about-btn  px-5 ' href='#aboutuspage' >Doyenify Academy</Button>
                          <Button  className='doyenifyacd-offer-btn mx-2 px-5' href='#whatweoffer' >What We Offer</Button>
                        </div>
                    
                  </Card>
                  </div>
                    
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              
              
          </Carousel>
     
    </div>
  )
}

export default Hero