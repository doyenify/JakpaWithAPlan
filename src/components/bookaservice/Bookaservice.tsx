import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './bookaservice.css';

function Bookaservice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='bookaservice-btn mx-2' style={{backgroundColor: "#044163"}} onClick={handleShow}>
        Book A Service
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'> Book A Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Kindly input your name"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Kindly input your email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="name"
                placeholder="Kindly input your phone number"
                autoFocus
              />
            </Form.Group>
        
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
              <Form.Label>Service</Form.Label>
              <Form.Select aria-label="Select Service">
              <option>Select Service</option>
              <option value="Consultancy">Consultancy</option>
              <option value="Crash Course">Crash Course</option>
              <option value="CV Review">CV Review</option>
              <option value="Certification">Certification</option>
            </Form.Select>
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Book Appointment"
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor: "#044163"}} onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor: "#044163"}} onClick={handleClose}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bookaservice;