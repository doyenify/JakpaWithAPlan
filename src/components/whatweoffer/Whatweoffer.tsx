import {Button, Card, Row, Col} from 'react-bootstrap';
import Bookaservice from '../bookaservice/Bookaservice';
import CourseList from '../courselist/CourseList';
import { ArrowRightShort} from 'react-bootstrap-icons';
import './whatweoffer.css';
// import { Link } from 'react-router-dom';

const Whatweoffer = () => {
  return (
    <div id='whatweoffer' style={{backgroundColor: "#000000", height:""}}>
      <div  className='text-center mb-5' style={{color: "#ffffff"}}>
         <h2>What We Offer</h2>
      </div>
    <div className='d-flex justify-content-center align-items-center pb-5'>
      <Row>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./img/consultancy.png"  />
                <Card.Body>
                  <Card.Title>Consultancy</Card.Title>
                    <Card.Text>
                    Our traveling consultancy provides comprehensive relocation services to individuals,
                   including customized planning, visa and immigration...
                   </Card.Text>
                    <Button className='readmore-btn' href='#constultancypage'  style={{backgroundColor: "#044163"}}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./img/course.png"  />
                <Card.Body>
                  <Card.Title>Crash Course</Card.Title>
                    <Card.Text>
                    Our crash courses provide an accelerated and focused learning experience for individuals 
                   seeking to quickly gain new skills or...
                   </Card.Text>
                    <Button className='readmore-btn' href='#coursepage' style={{backgroundColor: "#044163"}}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./img/cv.png"  />
                <Card.Body>
                  <Card.Title>CV Review</Card.Title>
                    <Card.Text>
                    Our CV review service offers a comprehensive and personalized evaluation of an individual's resume, 
                    highlighting...
                   </Card.Text>
                    <Button className='readmore-btn' href='#cvpage' style={{backgroundColor: "#044163"}}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
           <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./img/certificate.png"  />
                <Card.Body>
                  <Card.Title>Certificate</Card.Title>
                    <Card.Text>
                    We offer certification in all our Courses, these certificates indicate to your 
                   potential employers or clients that the person...
                   </Card.Text>
                    <Button className='readmore-btn' href='#certificatepage' style={{backgroundColor: "#044163"}}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
      </div>
       <div>
          <a className='text-center' style={{textDecoration: "none", color: "#ffffff"}} 
           href="#whatweoffer"> <h5> Book A Service <ArrowRightShort className="offer-arrow"/></h5>
          </a>
      </div>
      <div className='mt-5'>
      <Row id='constultancypage' className='h-100 py-5'>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <div className='content-wrapper text-white px-5'>
              <h2> Consultancy</h2>
              <div className=''>
               Our traveling consultancy provides comprehensive relocation services to individuals,
               including customized planning, visa and immigration assistance, housing solutions,
               school search for individuals, orientation and settling-in support, and ongoing 
               destination services,
               all delivered by our experienced and dedicated team of relocation specialists.
              </div>
              <br />
              <Bookaservice/>
              {/* <Button  style={{backgroundColor: "#044163"}}>Book This Service</Button> */}
            </div>
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
             <img src="./img/consultancyimage.png" alt="Consultancy" /> 
        </Col>
      </Row>
      </div>
      <div className='mt-5'>
      <Row id='coursepage' className='py-5'>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
             <img src="./img/courseimage.png" alt="Course" /> 
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <div className='content-wrapper text-white px-5'>
              <h2> Crash Course</h2>
              <div className=''>
              Our crash courses provide an accelerated and focused learning experience for individuals 
              seeking to quickly gain new skills or knowledge in various fields, including but not limited 
              to languages, technology, business, and creative arts, through expert instruction, hands-on practice, 
              and targeted feedback, all designed to maximize learning outcomes in a short period of time.
              </div>
              <br />
              <Bookaservice/>
              <CourseList/>
              {/* <Button  className="mx-5 px-5" style={{backgroundColor: "#044163"}}>Course List</Button> */}
            </div>
        </Col>
      </Row>
      </div>
      <div className='mt-5'>
      <Row id='cvpage' className='py-5'>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <div className='content-wrapper text-white px-5'>
              <h2> CV Review</h2>
              <div className=''>
                Our CV review service offers a comprehensive and personalized evaluation of an individual's resume, 
               highlighting strengths and weaknesses, providing feedback and suggestions for improvement,
               optimizing the document's structure, content, and formatting, and enhancing
               its overall effectiveness to increase the chances of securing an interview and landing a desired job.
              </div>
              <br />
              <Bookaservice/>
            </div>
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
             <img src="./img/cvimage.png" alt="Cv" /> 
        </Col>
      </Row>
      </div>
      <div className=''>
      <Row id='certificatepage' className=' py-5'>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
             <img src="./img/certificateimage.png" alt="Certificate" /> 
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <div className='content-wrapper text-white px-5'>
              <h2> Certificate</h2>
              <div className=''>
               We offer certification in all our Courses, these certificates indicate to your 
              potential employers or clients that the person holding the certification has met certain
               standards of proficiency in the course learnt. Also, some of the benefits of obtaining 
               JakpaWithAPlan certification for your course include increased credibility, greater job opportunities,
               and a competitive edge over other job applicants who do not have the certification
              </div>
              <br />
              <Bookaservice/>
            </div>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Whatweoffer