import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './courselist.css';


function CourseList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button className='courselist-btn mx-2 Px-5 '  style={{backgroundColor: "#044163"}} onClick={handleShow}>
        Course List
      </Button>

      <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'> Our Range of Courses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         HTML <br /> CSS <br /> JavaScript <br /> Web Development Frameworks (React, Angular, or Vue) <br /> Excel <br /> Business Analysis <br /> Business Intelligence <br />Programming <br /> Cyber Security <br /> Digital Marketing <br /> Data Analysis <br /> Statistics <br /> 
         Data Visualization <br />Product Design <br /> Graphics <br /> Video Editing <br />Front End Development <br /> Back End Development <br /> Data Base <br /> Leadership, 
        </Modal.Body>
        {/* <Modal.Footer>
          <Button style={{backgroundColor: "#044163"}} onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor: "#044163"}} onClick={handleClose}>
            Enquire
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default CourseList;