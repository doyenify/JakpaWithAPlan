import {Carousel} from 'react-bootstrap';
import "./testimonial.css";

const testimonyArray = [
`“Cum nisl tellus risus bibendum vel. . . Pellentesque suspendisse
  nunc proin ultrices neque sagittis.”`,
`“Cum nisl tellus risus bibendum vel. . . Pellentesque suspendisse
  nunc proin ultrices neque sagittis.”`,
`“Nisl tellus risus bibendum vel. . . Pellentesque suspendisse
  nunc proin ultrices neque sagittis.”`,
`“Cum nisl tellus risus bibendum vel. . . Pellentesque suspendisse
  nunc proin ultrices neque sagittis.”`
]

const Testimonial = () => {
  return (
    <div className="bg-black d-flex justify-content-center align-items-center" id='testimonial-wrapper' style={{ height: "60vh" }}>
      <div className="row testimonial-section text-white">
      <Carousel>
        <Carousel.Item>
          <div className='carousel-div'>
          <Carousel.Caption className='caption'>
            <h3>Testimonial</h3>
            <p>{testimonyArray[0]}</p>
            <p>Ifedolapo Ayoola</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-div'>
          <Carousel.Caption className='caption'>
            <h3>Testimonial</h3>
            <p>{testimonyArray[1]}</p>
            <p>Timilehin Ogunwole</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-div'>
          <Carousel.Caption className='caption'>
            <h3>Testimonial</h3>
            <p>{testimonyArray[2]}</p>
            <p>IfeOluwa Olagbemi</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-div'>
          <Carousel.Caption className='caption'>
            <h3>Testimonial</h3>
            <p>{testimonyArray[3]}</p>
            <p>Solagbade Enitilo</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
    </Carousel>
        
      </div>
    </div>
  )
}

export default Testimonial