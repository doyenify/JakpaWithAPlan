import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    course: Yup.string().required("Required")
})

const CourseForm:React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const courseList = ["--Course List--", "FRONT-END DEVELOPMENT - HTML CSS JAVASCRIPT", "Excel", "Business intelligence and business analysis", "Graphics and Product Design -figma", "Cyber Security", "Digital Marketing", "Data Analysis, Statistics and visualization", "Video Editing", "Software Development", "Back End Development - python/laravel" ]


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Course Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
            initialValues={{
                fullName: "",
                email: "",
                course: ""
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                axios.post('https://sheet.best/api/sheets/74c640d7-498a-431a-b45d-dafb4b526ffd', values)
                .then(response => {
                  console.log('loggin in', response);
                  setSubmitting(false);
                  resetForm();
                  resetForm();
                  toast.success('You have succesfully Registered, We will get back to you shortly');
                })

                .catch(error => {
                  console.error('error submitting form', error);
                  setSubmitting(false);
                  toast.error("Sorry your registration did not go through. Please check your connection and try again")
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
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
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

            <Form.Group controlId="service">
                  <Form.Label>Service</Form.Label>
                  <Field className="service-field" name="course" as={Form.Control} component="select">
                    {courseList.map((course) => (
                      <option value={course} key={course}>
                        {course}
                      </option>
                    ))}
                  </Field>                  
                  <Form.Control.Feedback type="invalid">
                   {errors.course}
                  </Form.Control.Feedback>
            </Form.Group>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
          style={{backgroundColor: "#044163"}}
          disabled={isSubmitting}
          type="submit"
          >
            Register
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

export default CourseForm