import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './courselist.css';
import CourseTable, { CourseTableProps } from '../CourseTable';


function CourseList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState<CourseTableProps[]>([]);
  
  const getData = async () => {
    try {
        const res = await fetch("https://sheet.best/api/sheets/fe350476-a088-47ca-b5aa-b654b3ebb99a")
        const jsonData = await res.json()
        setData(jsonData)
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    getData()
}, [])

  return (
    <>
      <Button className='courselist-btn mx-2 Px-5 '  style={{backgroundColor: "#044163"}} onClick={handleShow}>
        Course List
      </Button>

      <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'> Our Range of Courses</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize: "14px"}}>
          {data?.map((item) => (
            <CourseTable 
              key={item.id}
              id={item.id}
              courseList={item.courseList}
              date={item.date}
              duration={item.duration}
              feeNaira={item.feeNaira}
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CourseList;