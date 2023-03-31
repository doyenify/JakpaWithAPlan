import {Button, Card, Row, Col} from 'react-bootstrap';

const Whatweoffer = () => {
  return (
   
    <div  style={{backgroundColor: "#000000", height:""}}>
      <div className='text-center mb-5' style={{color: "#ffffff"}}>
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
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                   </Card.Text>
                    <Button href='#constultancypage'  style={{backgroundColor: "#044163"}}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./img/course.png"  />
                <Card.Body>
                  <Card.Title>Crash Course</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                   </Card.Text>
                    <Button href='#coursepage' style={{backgroundColor: "#044163"}}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./img/cv.png"  />
                <Card.Body>
                  <Card.Title>CV Review</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                   </Card.Text>
                    <Button href='#cvpage' style={{backgroundColor: "#044163"}}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
           <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./img/certificate.png"  />
                <Card.Body>
                  <Card.Title>Certificate</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                   </Card.Text>
                    <Button href='#certificatepage' style={{backgroundColor: "#044163"}}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
      </div>
      <div className='mt-5'>
      <Row id='constultancypage' className='h-100 py-5'>
        <Col className='d-flex justify-content-center align-items-center pb-5'>
            <div className='content-wrapper text-white px-5'>
              <h2> Consultancy</h2>
              <div className=''>
                Lorem ipsum dolor sit amet consectetur. At id tortor odio arcu 
                rhoncus a sit enim. Massa sem neque lorem massa bibendum in turpis 
                viverra. Vel elementum nunc malesuada velit in bibendum aliquet ac sit.
                <br /> <br />
                Et sit ultricies faucibus sed. Purus adipiscing donec elementum velit. 
                Sit et ligula venenatis in sem ut egestas ac scelerisque. Sed neque arcu 
                nunc amet. Gravida sit integer amet id amet magna senectus sit. Turpis erat 
                diam commodo malesuada.
              </div>
              <br />
              <Button  style={{backgroundColor: "#044163"}}>Book This Service</Button>
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
                Lorem ipsum dolor sit amet consectetur. At id tortor odio arcu 
                rhoncus a sit enim. Massa sem neque lorem massa bibendum in turpis 
                viverra. Vel elementum nunc malesuada velit in bibendum aliquet ac sit.
                <br /> <br />
                Et sit ultricies faucibus sed. Purus adipiscing donec elementum velit. 
                Sit et ligula venenatis in sem ut egestas ac scelerisque. Sed neque arcu 
                nunc amet. Gravida sit integer amet id amet magna senectus sit. Turpis erat 
                diam commodo malesuada.
              </div>
              <br />
              <Button  style={{backgroundColor: "#044163"}}>Book This Service</Button>
              <Button  className="mx-5 px-5" style={{backgroundColor: "#044163"}}>Course List</Button>
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
                Lorem ipsum dolor sit amet consectetur. At id tortor odio arcu 
                rhoncus a sit enim. Massa sem neque lorem massa bibendum in turpis 
                viverra. Vel elementum nunc malesuada velit in bibendum aliquet ac sit.
                <br /> <br />
                Et sit ultricies faucibus sed. Purus adipiscing donec elementum velit. 
                Sit et ligula venenatis in sem ut egestas ac scelerisque. Sed neque arcu 
                nunc amet. Gravida sit integer amet id amet magna senectus sit. Turpis erat 
                diam commodo malesuada.
              </div>
              <br />
              <Button  style={{backgroundColor: "#044163"}}>Book This Service</Button>
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
                Lorem ipsum dolor sit amet consectetur. At id tortor odio arcu 
                rhoncus a sit enim. Massa sem neque lorem massa bibendum in turpis 
                viverra. Vel elementum nunc malesuada velit in bibendum aliquet ac sit.
                <br /> <br />
                Et sit ultricies faucibus sed. Purus adipiscing donec elementum velit. 
                Sit et ligula venenatis in sem ut egestas ac scelerisque. Sed neque arcu 
                nunc amet. Gravida sit integer amet id amet magna senectus sit. Turpis erat 
                diam commodo malesuada.
              </div>
              <br />
              <Button  style={{backgroundColor: "#044163"}}>Book This Service</Button>
            </div>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Whatweoffer