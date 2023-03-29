import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap'
import aboutus_img from '../../img/aboutus_img.png'

const AboutUs = () => {
  return (
    <div>
      <div className='container-fluid bg-black' style={{ height: "100vh" }}>
        <Row className='h-100'>
          <Col className='d-flex justify-content-center align-items-center'>
            <div className='content-wrapper text-white px-5'>
              <h2>About Us</h2>
              <div className='aboutus-contents'>
                Lorem ipsum dolor sit amet consectetur. At id tortor odio arcu 
                rhoncus a sit enim. Massa sem neque lorem massa bibendum in turpis 
                viverra. Vel elementum nunc malesuada velit in bibendum aliquet ac sit.
                <br /> <br />
                Et sit ultricies faucibus sed. Purus adipiscing donec elementum velit. 
                Sit et ligula venenatis in sem ut egestas ac scelerisque. Sed neque arcu 
                nunc amet. Gravida sit integer amet id amet magna senectus sit. Turpis erat 
                diam commodo malesuada.
              </div>
            </div>
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <div className='aboutusimg_wrapper'>
              <img src={aboutus_img} alt="About us image" style={{ boxShadow: "15px -15px #044163" }} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutUs