import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './courselist.css';
import CourseTable from '../CourseTable';
import CourseData from 'src/CourseData';


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
          {CourseData.map((data) => (
            <CourseTable 
              key={data.id}
              id={data.id}
              courseName={data.courseName}
              courseDate={data.courseDate}
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CourseList;