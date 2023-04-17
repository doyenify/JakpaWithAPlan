import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './makeenquiry.css';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
 
});

function Makeenquiry() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button className='makeenquiry-btn mx-2'  style={{backgroundColor: "#044163"}} onClick={handleShow}>
        Make An Enquiry
      </Button>

      <Modal  show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title className='text-center'> Make An Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
                  initialValues={{
                    email: "", 
                    message: "",
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    axios.post('https://sheet.best/api/sheets/01bed241-fce6-4ac3-8da4-c227f30cc851', values)
                    .then(response => {
                      console.log('loggin in', response);
                      setSubmitting(false);
                      resetForm();
                      resetForm();
                      toast.success('We have received your message, We will get back to you shortly');
                    })

                    .catch(error => {
                      console.error('error submitting form', error);
                      setSubmitting(false);
                      toast.error("Sorry we could not receive your message. Please check your connection and try again")
                    });
                    resetForm();
                  }}
                 
                  validationSchema={validationSchema}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    handleBlur,
                    isSubmitting,
                  }) => (
          <Form
             noValidate
             onSubmit={handleSubmit}
          
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="input-label">Email Address</Form.Label>
              <Form.Control
                className="contact-input"
                type="text"
                name="email"
                placeholder="name@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.email}
              />
               <Form.Control.Feedback 
               type="invalid">
               {errors.email}
               </Form.Control.Feedback>
               </Form.Group>

               <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.message}
              />
               <Form.Control.Feedback 
               type="invalid"
               >
               {errors.message}
               </Form.Control.Feedback>
            </Form.Group>
            <Modal.Footer>
             <Button 
            style={{backgroundColor: "#044163"}}
            onClick={handleClose}
          >
            Close
           </Button>
           <Button 
            style={{backgroundColor: "#044163"}}
            disabled={isSubmitting}
            type="submit"
            > 
            Enquire
          <ToastContainer /> 
          </Button>
          </Modal.Footer>
          </Form>

               )}      
        </Formik>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Makeenquiry;