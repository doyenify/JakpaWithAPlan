import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'
import aboutus_img from '../../img/aboutus_img.png'
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <div id='aboutuspage' className='container-fluid bg-black' style={{ height: "100vh" }}>
        <Row className='h-100 py-5'>
          <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center pb-5'>
            <div  className='content-wrapper text-white px-5'>
              <h2>About Us</h2>
              <div className='aboutus-contents'>
                JakpaWithAPlan is a leading provider of services for traveling consultancy, CV review, and crash courses with certification. We are dedicated to helping our clients achieve their goals and reach their full potential, whether they are looking to advance their career or explore new opportunities around the world.
                Our team of experienced consultants provides personalized guidance and support to help our clients navigate the complex world of travel, job applications, and professional development. We understand that every client is unique and has different needs, which is why we take a customized approach to every project.
                we pride ourselves on our commitment to excellence, integrity, and client satisfaction. Whether you are a seasoned professional or just starting out on your journey, we are here to help you achieve your goals and reach your full potential.
              </div>
            </div>
          </Col>
          <Col className='col-12 col-sm-6 d-flex justify-content-center align-items-center pb-5'>
            <div className='aboutusimg_wrapper' style={{ width: "21.8rem"}}>
              <img src={aboutus_img} alt="About us" style={{ boxShadow: "15px -15px #044163", width: "100%", height: "auto", borderRadius: "10px" }} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutUs