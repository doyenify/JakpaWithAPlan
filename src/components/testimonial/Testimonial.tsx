import {Carousel} from 'react-bootstrap';
import { Quote } from 'react-bootstrap-icons';
import "./testimonial.css";
import ifedolapo_ourteam_img from "../../img/ifedolapo_ourteam_img.jpg";
import ifeoluwa_team from "../../img/ifeoluwa_team.jpg";
import davidson from "../../img/davidson.jpg";
import solagbade_ourteam_img from "../../img/solagbade_ourteam_img.jpg";

const testimonyArray = [
`As a busy professional, I often struggle to find the time to attend traditional 
in-person courses. However, with JakpaWithAPlan, I was able to learn at my own 
pace and on my own schedule. The course was available 24/7, and I could access 
it from anywhere with an internet connection`,
`Once I completed my course, I was able to submit my certificate for review. 
The review process was quick and efficient, and I received my certificate within a few days. 
The certificate itself was beautifully designed and looked very professional.`,
` I would highly recommend  JakpaWithAPlan to anyone looking to learn new skills and 
earn valuable certificates. The quality of the courses and the professionalism of the 
certificate review process make this platform stand out from the rest. Thank you, 
JakpaWithAPlan, for providing such a valuable service!"
`,
`I recently used JakpaWithAPlan for their relocation and traveling advisory services, 
and I have to say, it was one of the best decisions I've made!. 
They took the time to understand my needs and preferences and tailored their 
recommendations accordingly. This made me feel like I had a trusted advisor 
on my side, someone who genuinely cared about my well-being and happiness in my new destination.`
]

const Testimonial = () => {
  return (
    <div className="bg-black d-flex justify-content-center align-items-center" id='testimonial-wrapper' style={{ height: "100vh" }}>
      <div className="row testimonial-section text-white">
      <Carousel>
        <Carousel.Item>
          <div className='carousel-div'>
            <Carousel.Caption className='caption'>
              <div className='caption-wrapper'>
                <div className='carousel-img-wrapper'><img alt='' src={ifedolapo_ourteam_img} ></img></div>
                <h3>Testimonial</h3>
                <span><Quote className='quote-icon' /></span>
                <p className='testimony-content'>{testimonyArray[0]}</p>
                <p>IFEDOLAPO</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-div'>
            <Carousel.Caption className='caption'>
              <div className='caption-wrapper'>
                <div className='carousel-img-wrapper'><img alt='' src={davidson} ></img></div>
                <h3>Testimonial</h3>
                <span><Quote className='quote-icon' /></span>
                <p className='testimony-content'>{testimonyArray[1]}</p>
                <p>DAVIDSON</p>
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
                <p className='testimony-content'>{testimonyArray[2]}</p>
                <p>IFEOLUWA</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-div'>
            <Carousel.Caption className='caption'>
              <div className='caption-wrapper'>
                <div className='carousel-img-wrapper'><img width="100px" height="100px" alt='' src={solagbade_ourteam_img} style={{ borderRadius: "50%" }} ></img></div>
                <h3>Testimonial</h3>
                <span><Quote className='quote-icon' /></span>
                <p className='testimony-content'>{testimonyArray[3]}</p>
                <p>SOLAGBADE</p>
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