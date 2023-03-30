import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import travel_img_1 from '../../img/travel_img_1.png'
import travel_img_2 from '../../img/travel_img_2.png'
import travel_img_3 from '../../img/travel_img_3.png'
import travel_img_4 from '../../img/travel_img_4.png'
import travel_img_5 from '../../img/travel_img_5.png'
import travel_img_6 from '../../img/travel_img_6.png'

const Travel = () => {
  return (
    <div>
      <div className='container-fluid bg-black text-white' style={{ height: "100vh" }}>
        <Row className='h-100'>
          <Col>
            <div className='container-fluid travel-img-wrapper'style={{ maxWidth: "560px" }}>
              <Row>
                <Col className='col-sm-4'>
                  <img src={travel_img_1} alt="travel img"></img>
                </Col>
              </Row>
              <Row className='my-2'>
                <Col className='col-sm-4'>
                    <img src={travel_img_2} alt="travel img"></img>
                </Col>
                <Col className='col-sm-4'>
                    <img src={travel_img_3} alt="travel img"></img>
                </Col>
              </Row>
              <Row>
              <Col className='col-sm-4'>
                    <img src={travel_img_4} alt="travel img"></img>
                </Col>
                <Col className='col-sm-4'>
                    <img src={travel_img_5} alt="travel img"></img>
                </Col>
                <Col className='col-sm-4'>
                    <img src={travel_img_6} alt="travel img"></img>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className='travel-content-wrapper'>
              <h2>Travel With A Plan</h2>
              <ul>
                <li>Build a skill <span style={{ display: "block" }}>Lorem ipsum dolor sit amet consectetur.  </span></li>
                <li>Build Competence <span style={{ display: "block" }}>Lorem ipsum dolor sit amet consectetur.  </span></li>
                <li>Earn More <span style={{ display: "block" }}>Lorem ipsum dolor sit amet consectetur.  </span></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Travel