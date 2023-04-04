import {Carousel} from 'react-bootstrap';
import { Quote } from 'react-bootstrap-icons';
import "./testimonial.css";
import ifedolapo_ourteam_img from "../../img/ifedolapo_ourteam_img.jpg";
import ifeoluwa_team from "../../img/ifeoluwa_team.jpg";

const testimonyArray = [
`Cum nisl tellus risus bibendum vel. . . Pellentesque suspendisse
  nunc proin ultrices neque sagittis.`,
`Cum nisl tellus risus bibendum vel. . . Pellentesque suspendisse
  nunc proin ultrices neque sagittis.`,
`Nisl tellus risus bibendum vel. . . Pellentesque suspendisse
  nunc proin ultrices neque sagittis.`,
`Cum nisl tellus risus bibendum vel. . . Pellentesque suspendisse
  nunc proin ultrices neque sagittis.`
]

const Testimonial = () => {
  return (
    <div className="bg-black d-flex justify-content-center align-items-center" id='testimonial-wrapper' style={{ height: "80vh" }}>
      <div className="row testimonial-section text-white">
      <Carousel>
        <Carousel.Item>
          <div className='carousel-div'>
            <Carousel.Caption className='caption'>
              <div className='caption-wrapper'>
                <div className='carousel-img-wrapper'><img alt='' src={ifedolapo_ourteam_img} ></img></div>
                <h3>Testimonial</h3>
                <span><Quote className='quote-icon' /></span>
                <p>{testimonyArray[0]}</p>
                <p>Ifedolapo Ayoola</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-div'>
            <Carousel.Caption className='caption'>
              <div className='caption-wrapper'>
                <div className='carousel-img-wrapper'><img alt='' src={ifedolapo_ourteam_img} ></img></div>
                <h3>Testimonial</h3>
                <span><Quote className='quote-icon' /></span>
                <p>{testimonyArray[1]}</p>
                <p>Timilehin Ogunwole</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-div'>
            <Carousel.Caption className='caption'>
              <div className='caption-wrapper'>
                <div className='carousel-img-wrapper'><img alt='' src={ifeoluwa_team} ></img></div>
                <h3>Testimonial</h3>
                <span><Quote className='quote-icon' /></span>
                <p>{testimonyArray[2]}</p>
                <p>Ifeoluwa Olagbemi</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-div'>
            <Carousel.Caption className='caption'>
              <div className='caption-wrapper'>
                <div className='carousel-img-wrapper'><img width="100px" height="100px" alt='' src={ifedolapo_ourteam_img} style={{ borderRadius: "50%" }} ></img></div>
                <h3>Testimonial</h3>
                <span><Quote className='quote-icon' /></span>
                <p>{testimonyArray[3]}</p>
                <p>Solagbade Enitilo</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
    </Carousel>
        
      </div>
    </div>
  )
}

export default Testimonial