import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './bookaservice.css';
import { Formik, Field} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().required("Required"),
  service: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

function Bookaservice() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    { label: "Select a Service", value: "" },
    { label: "Consultancy", value: "Consultancy" },
    { label: "Crash Course and Certification", value: "Crash Course and Certification" },
    { label: "CV Review", value: "CV Review" },
  ];

  return (
    <>
      <Button className='bookaservice-btn mx-2' style={{backgroundColor: "#044163"}} onClick={handleShow}>
        Book A Service
      </Button>

      <Modal  show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
         <Modal.Title className='text-center'> Book A Service</Modal.Title>
          </Modal.Header>
           <Modal.Body>
            <Formik
                  initialValues={{
                    fullname: "",
                    email: "",
                    phone: "",
                    service: "", 
                    description: ""
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
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                className="contact-input"
                type="text"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.fullname}
              />
               <Form.Control.Feedback type="invalid">
               {errors.fullname}
              </Form.Control.Feedback>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="contact-input"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
               {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder=""
                autoFocus
                className="contact-input"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
               {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="service">
                  <Form.Label>Service</Form.Label>
                  <Field  className="service-field" name="service" as={Form.Control} component="select">
                    {options.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>                  
                  <Form.Control.Feedback type="invalid">
                   {errors.service}
                  </Form.Control.Feedback>
                </Form.Group> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder=""
                as="textarea"
                rows={5}
                className="contact-input"
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
               {errors.description}
              </Form.Control.Feedback>
               Note: For CV Review, kindly send your CV 
               through any our social media platforms or email  
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
            onClick={handleClose}
            disabled={isSubmitting}
            type="submit"
            > 
            Book
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

export default Bookaservice;