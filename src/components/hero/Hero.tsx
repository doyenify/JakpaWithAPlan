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
                <img src="./img/hero.png" className="cimg" alt="...">

                </img>
                  <div className="shiftme">
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
                      
                    </Carousel.Caption><Carousel.Caption className='caption carousel-div'>
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
                  
                </div>
              </Carousel.Item>

              <Carousel.Item >
              <div className = "cardcon"  >
                <img src="./img/doyenacademy.png" className="cimg" alt="...">

                </img>
                  <div className="shiftme">
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
                            <Button  className='doyenifyacd-about-btn  px-5 ' href='https://academy.doyenify.com/' >Doyenify Academy</Button>
                            <Button  className='doyenifyacd-offer-btn mx-2 px-5' href='#whatweoffer' >What We Offer</Button>
                          </div>
                      
                    </Card>
                    </div>
                      
                    </Carousel.Caption>
                  </div>
                </div>
              </Carousel.Item>



              {/* extra1 */}
              <Carousel.Item >
              <div className = "cardcon"  >
                <img src="./img/carousel1.png" className="cimg" alt="...">

                </img>
                  <div className="shiftme">
                    <Carousel.Caption className='caption carousel-div'>
                      <br/>
                      <br/>
                      <div className='hero-card-container '>
                      <Card className="bg-transparent  bg-dark text-white " style={{padding: "0", borderColor: "#ffffff00"}}>
                      <div className="doyenifyacd-text" >Services1</div>
                      <Card.Title className="hero-title text-width2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      <br/>Tempore, eius, ab, molestiae praesentium hic quia quaerat culpa quas consectetur <br/>
                      dolor veritatis vel voluptas minus laborum minima quis dolorum necessitatibus tempora.
                      </Card.Title>
                        {/* <div className='mt-3 hero-btn'>
                            <Button  className='doyenifyacd-about-btn  px-5 ' href='https://academy.doyenify.com/' >Doyenify Academy</Button>
                            <Button  className='doyenifyacd-offer-btn mx-2 px-5' href='#whatweoffer' >What We Offer</Button>
                          </div> */}
                      
                    </Card>
                    </div>
                      
                    </Carousel.Caption>
                  </div>
                </div>
              </Carousel.Item>


              {/* extra2 */}
              <Carousel.Item >
              <div className = "cardcon"  >
                <img src="./img/carousel2.png" className="cimg" alt="...">

                </img>
                  <div className="shiftme">
                    <Carousel.Caption className='caption carousel-div'>
                      <br/>
                      <br/>
                      <div className='hero-card-container '>
                      <Card className="bg-transparent  bg-dark text-white " style={{padding: "0", borderColor: "#ffffff00"}}>
                      <div className="doyenifyacd-text" >Services2</div>
                      <Card.Title className="hero-title text-width2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      <br/>Tempore, eius, ab, molestiae praesentium hic quia quaerat culpa quas consectetur <br/>
                      dolor veritatis vel voluptas minus laborum minima quis dolorum necessitatibus tempora.
                      </Card.Title>
                        {/* <div className='mt-3 hero-btn'>
                            <Button  className='doyenifyacd-about-btn  px-5 ' href='https://academy.doyenify.com/' >Doyenify Academy</Button>
                            <Button  className='doyenifyacd-offer-btn mx-2 px-5' href='#whatweoffer' >What We Offer</Button>
                          </div> */}
                      
                    </Card>
                    </div>
                      
                    </Carousel.Caption>
                  </div>
                </div>
              </Carousel.Item>
              

              {/* extra3 */}
              <Carousel.Item >
              <div className = "cardcon"  >
                <img src="./img/carousel3.png" className="cimg" alt="...">

                </img>
                  <div className="shiftme">
                    <Carousel.Caption className='caption carousel-div'>
                      <br/>
                      <br/>
                      <div className='hero-card-container '>
                      <Card className="bg-transparent  bg-dark text-white " style={{padding: "0", borderColor: "#ffffff00"}}>
                      <div className="doyenifyacd-text" >Services3</div>
                      <Card.Title className="hero-title text-width2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      <br/>Tempore, eius, ab, molestiae praesentium hic quia quaerat culpa quas consectetur <br/>
                      dolor veritatis vel voluptas minus laborum minima quis dolorum necessitatibus tempora.
                      </Card.Title>
                        {/* <div className='mt-3 hero-btn'>
                            <Button  className='doyenifyacd-about-btn  px-5 ' href='https://academy.doyenify.com/' >Doyenify Academy</Button>
                            <Button  className='doyenifyacd-offer-btn mx-2 px-5' href='#whatweoffer' >What We Offer</Button>
                          </div> */}
                      
                    </Card>
                    </div>
                      
                    </Carousel.Caption>
                  </div>
                </div>
              </Carousel.Item>

               {/* extra4 */}
               <Carousel.Item >
              <div className = "cardcon"  >
                <img src="./img/carousel1.png" className="cimg" alt="...">

                </img>
                  <div className="shiftme">
                    <Carousel.Caption className='caption carousel-div'>
                      <br/>
                      <br/>
                      <div className='hero-card-container '>
                      <Card className="bg-transparent  bg-dark text-white " style={{padding: "0", borderColor: "#ffffff00"}}>
                      <div className="doyenifyacd-text" >Services4</div>
                      <Card.Title className="hero-title text-width2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      <br/>Tempore, eius, ab, molestiae praesentium hic quia quaerat culpa quas consectetur <br/>
                      dolor veritatis vel voluptas minus laborum minima quis dolorum necessitatibus tempora.
                      </Card.Title>
                        {/* <div className='mt-3 hero-btn'>
                            <Button  className='doyenifyacd-about-btn  px-5 ' href='https://academy.doyenify.com/' >Doyenify Academy</Button>
                            <Button  className='doyenifyacd-offer-btn mx-2 px-5' href='#whatweoffer' >What We Offer</Button>
                          </div> */}
                      
                    </Card>
                    </div>
                      
                    </Carousel.Caption>
                  </div>
                </div>
              </Carousel.Item>
              

              {/* extra5 */}
              <Carousel.Item >
              <div className = "cardcon"  >
                <img src="./img/carousel3.png" className="cimg" alt="...">

                </img>
                  <div className="shiftme">
                    <Carousel.Caption className='caption carousel-div'>
                      <br/>
                      <br/>
                      <div className='hero-card-container '>
                      <Card className="bg-transparent  bg-dark text-white " style={{padding: "0", borderColor: "#ffffff00"}}>
                      <div className="doyenifyacd-text" >Services5</div>
                      <Card.Title className="hero-title text-width2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      <br/>Tempore, eius, ab, molestiae praesentium hic quia quaerat culpa quas consectetur <br/>
                      dolor veritatis vel voluptas minus laborum minima quis dolorum necessitatibus tempora.
                      </Card.Title>
                        {/* <div className='mt-3 hero-btn'>
                            <Button  className='doyenifyacd-about-btn  px-5 ' href='https://academy.doyenify.com/' >Doyenify Academy</Button>
                            <Button  className='doyenifyacd-offer-btn mx-2 px-5' href='#whatweoffer' >What We Offer</Button>
                          </div> */}
                      
                    </Card>
                    </div>
                      
                    </Carousel.Caption>
                  </div>
                </div>
              </Carousel.Item>
              
          </Carousel>
     
    </div>
  )
}

export default Hero