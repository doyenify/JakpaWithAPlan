import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import travel_img_1 from '../../img/travel_img_1.png'
import travel_img_2 from '../../img/travel_img_2.png'
import travel_img_3 from '../../img/travel_img_3.png'
import travel_img_4 from '../../img/travel_img_4.png'
import travel_img_5 from '../../img/travel_img_5.png'
import travel_img_6 from '../../img/travel_img_6.png'
import './travel.css';


const Travel = () => {
  const [highlight, setHighlight] = useState<number | null>(null);
  const skillRef = useRef<HTMLLIElement | null>(null); 
const handleClick = (index: number) => {
    setHighlight(index)
}
  return (
      <div className='container-fluid bg-black text-white travel-section-wrapper' style={{ height: "" }}>
        <Row className='h-100'>
          <Col className='travel-img-col d-flex justify-content-center align-items-center'>
            <div className='container-fluid travel-img-wrapper'style={{ maxWidth: "560px" }}>
              <Row>
                <Col className='col-sm-4 travel-img-parent' onClick={() => handleClick(0)} style={{ position: "relative" }}>
                  <img src={travel_img_1} alt="travel img"></img>
                  <h5 style={{ fontSize: "1.25rem", margin: "0", position: "absolute", bottom: "16px", right: "5%", background: "rgba(0,0,0,0.3)", padding: "5px", borderRadius: "5px" }}>Competence</h5>
                </Col>
              </Row>
              <Row className='my-2'>
                <Col className='col-sm-4 travel-img-parent' onClick={() => handleClick(1)} style={{ position: "relative" }}>
                    <img src={travel_img_2} alt="travel img"></img>
                    <h5 style={{ fontSize: "1.25rem", margin: "0", position: "absolute", bottom: "16px", right: "5%", background: "rgba(0,0,0,0.3)", padding: "5px", borderRadius: "5px" }}>Experience</h5>
                </Col>
                <Col className='col-sm-4 travel-img-parent' onClick={() => handleClick(2)} style={{ position: "relative" }}>
                    <img src={travel_img_3} alt="travel img"></img>
                    <h5 style={{ fontSize: "1.25rem", position: "absolute", bottom: "16px", right: "5%", background: "rgba(0,0,0,0.3)", padding: "5px", borderRadius: "5px" }}>Skill</h5>
                </Col>
              </Row>
              <Row>
                <Col className='col-sm-4 travel-img-parent' onClick={() => handleClick(3)} style={{ position: "relative" }}>
                    <img src={travel_img_4} alt="travel img"></img>
                    <h5 style={{ fontSize: "1.25rem", position: "absolute", bottom: "16px", right: "5%", background: "rgba(0,0,0,0.3)", padding: "5px", borderRadius: "5px" }}>More Income</h5>
                </Col>
                <Col className='col-sm-4 travel-img-parent' onClick={() => handleClick(4)} style={{ position: "relative" }}>
                    <img src={travel_img_5} alt="travel img"></img>
                    <h5 style={{ fontSize: "1.25rem", position: "absolute", bottom: "16px", right: "5%", background: "rgba(0,0,0,0.3)", padding: "5px", borderRadius: "5px"}}>Career</h5>
                </Col>
                <Col className='col-sm-4 travel-img-parent' onClick={() => handleClick(5)} style={{ position: "relative" }}>
                    <img src={travel_img_6} alt="travel img"></img>
                    <h5 style={{ fontSize: "1.25rem", position: "absolute", bottom: "16px", right: "5%", background: "rgba(0,0,0,0.3)", padding: "5px", borderRadius: "5px" }}>Dream Job</h5>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className='d-flex justify-content-center travel-content-col'>
            <div className='travel-content-wrapper'>
              <h2>Relocate With A Plan </h2>
              <ul className='travel-list'>
                <li ref={skillRef} className={highlight === 2 ? 'highlight' : 'un-highlight'}>Build a skill 
                  <span className='travel-skill'>Building a skill is like building a muscle - 
                      the more you work on it, the stronger it becomes.
                  </span>
                </li>
                <li className={highlight === 0 ? 'highlight' : 'un-highlight'}>Build Competence 
                  <span className='travel-skill'>
                    Building competence is a journey, not a destination. 
                    It requires dedication, persistence, and a commitment to continuous learning.
                  </span>
                </li>
                <li className={highlight === 3 ? 'highlight' : 'un-highlight'}>Increase Income
                  <span className='travel-skill'>
                    We assist individuals by ensuring improvement in 
                    ability to explore various ways of increasing their income.
                  </span>
                </li>
                <li className={highlight === 4 ? 'highlight' : 'un-highlight'}>Build A Career 
                  <span className='travel-skill'>
                    Building a successful career requires self-awareness, skill development, 
                    dedication, hard work, continuous learning, adaptability, and a clear vision 
                    of one's goals.
                  </span>
                </li>
                <li className={highlight === 5 ? 'highlight' : 'un-highlight'}>Dream Job 
                  <span className='travel-skill'>
                    Your dream job is not just a career, it's a reflection of your passion, 
                    purpose, and values that brings fulfillment and satisfaction to your life.
                  </span>
                </li>
                <li className={highlight === 1 ? 'highlight' : 'un-highlight'}>Acquire Experience 
                  <span className='travel-skill'>
                    Experience is the priceless currency of wisdom, 
                    earned through the trials and triumphs of life's journey,
                    and it fuels the engine of personal growth.
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
  )
}

export default Travel