import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { PopupButton } from "react-calendly";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './bookaservice.css';
import { Formik, Field} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  Fullname: Yup.string().required("Required"),
  Email: Yup.string().email("Invalid Email").required("Required"),
  Phone: Yup.number().required("Required"),
  Service: Yup.string().required("Required"),
  // Course: Yup.string().required("Required"),
  // Country: Yup.string().required("Required"),
  //Description: Yup.string().required("Required"),
});


function BookaService() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const rootElementRef = useRef<HTMLDivElement>(null)

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, setFieldValue: (field: string, value: any) => void) => {
  //   const selectedValue = event.target.value;
  // }
  const options = [
    { label: "Select a Service", value: "" },
    { label: "Consultancy", value: "Consultancy" },
    { label: "Crash Course and Certification", value: "Crash Course and Certification" },
    { label: "CV Review", value: "CV Review" },
    { label: "Hands-on experience", value: "Hands-on Experience" },

  ];
  const CourseList = ["--Course List--", "HTML", "CSS", "JavaScript", "Web Development", "Frameworks (React, Angular, or Vue)", "Excel", "Business Analysis", "Business Intelligence", "Programming", "Cyber Security", "Digital Marketing", "Data Analysis", "Statistics",
                      "Data Visualization", "Product Design", "Graphics", "Video Editing", "Front End Development", "Back End Development", "Data Base", "Leadership" ]
  const CountryList = [ "--Choose Country--","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  const CourseRef = useRef<HTMLDivElement | null>(null);
  //const ServiceRef = useRef<HTMLSelectElement | null>(null) 
  
  
  return (
    <>
      <Button className='bookaService-btn mx-2' style={{backgroundColor: "#044163"}} onClick={handleShow}>
        Book A Service
      </Button>

      <Modal  show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
         <Modal.Title className='text-center'> Book A Service</Modal.Title>
          </Modal.Header>
           <Modal.Body>
            <Formik
                  initialValues={{
                    Fullname: "",
                    Email: "",
                    Phone: "",
                    Service: "",
                    Course: "",
                    Country: "",
                    Description: ""
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    axios.post('https://us-central1-doyenifypanelapi.cloudfunctions.net/app/bookings', values)
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
                    name="Fullname"
                    value={values.Fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.Fullname}
                  />
                  <Form.Control.Feedback type="invalid">
                  {errors.Fullname}
                  </Form.Control.Feedback>
                </Form.Group> 
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    className="contact-input"
                    type="text"
                    name="Email"
                    value={values.Email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.Email}
                  />
                  <Form.Control.Feedback type="invalid">
                  {errors.Email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    placeholder=""
                    autoFocus
                    className="contact-input"
                    type="text"
                    name="Phone"
                    value={values.Phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.Phone}
                  />
                  <Form.Control.Feedback type="invalid">
                  {errors.Phone}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="Service">
                  <Form.Label>Service</Form.Label>
                  <Field className="Service-field" name="Service" as={Form.Control} component="select">
                    {options.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>                  
                  <Form.Control.Feedback type="invalid">
                   {errors.Service}
                  </Form.Control.Feedback>
                </Form.Group>
                
                {values.Service === 'Crash Course and Certification' && (
                  <Form.Group controlId='Course' ref={CourseRef}>
                  <Form.Label>Course</Form.Label>
                  <Field className="Service-field" name="Course" as={Form.Control} component="select">
                    {CourseList.map((Course) => (
                      <option value={Course} key={Course} >
                        {Course}
                      </option>
                    ))}
                  </Field>
                  <Form.Control.Feedback>
                    {errors.Course}
                  </Form.Control.Feedback>
                </Form.Group>
                )}
                
                {values.Service === 'CV Review' && (
                  <Form.Group controlId='Country'>
                  <Form.Label>Country</Form.Label>
                  <Field className="Service-field" name="Country" as={Form.Control} component="select">
                    {CountryList.map((Country) => (
                      <option value={Country} key={Country}>
                        {Country}
                      </option>
                    ))}
                  </Field>
                  <Form.Control.Feedback>
                    {errors.Country}
                  </Form.Control.Feedback>
                </Form.Group>
                )}

                {(values.Service === 'Consultancy' || values.Service === 'Hands-on Experience') && (
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    placeholder=""
                    as="textarea"
                    rows={5}
                    className="contact-input"
                    type="text"
                    name="Description"
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.Description}
                  />
                  <Form.Control.Feedback type="invalid">
                  {errors.Description}
                  </Form.Control.Feedback>  
                </Form.Group>
                )}

              {values.Service === 'Consultancy' && (
                <div ref={rootElementRef}>
                <PopupButton
                  url="https://calendly.com/jakpawithaplan/30min"
                  rootElement={rootElementRef.current!}
                  text="Click here to schedule!"
                  className='calendly-btn'
                
                />
              </div>
              )}

                Note: For CV Review, kindly send your CV 
                  to <a rel='noreferrer' target='_blank' style={{color: "#000000"}} href='mailto:jakpawithaplan@gmail.com'>jakpawithaplan@gmail.com</a> using your full name as Title
                          
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

export default BookaService;