import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './makeenquiry.css';

function Makeenquiry() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button className='makeenquiry-btn mx-2'  style={{backgroundColor: "#044163"}} onClick={handleShow}>
        Make An Enquiry
      </Button>

      <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'> Make An Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor: "#044163"}} onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor: "#044163"}} onClick={handleClose}>
            Enquire
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Makeenquiry;