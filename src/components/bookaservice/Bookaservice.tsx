import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { PopupButton } from "react-calendly";
import './bookaservice.css';



function Bookaservice() {
  const options = ["Select Service", "Consultancy", "Crash Course", "CV Review", "Certification"]
  const courseList = ["--Course List--", "HTML", "CSS", "JavaScript", "Web Development", "Frameworks (React, Angular, or Vue)", "Excel", "Business Analysis", "Business Intelligence", "Programming", "Cyber Security", "Digital Marketing", "Data Analysis", "Statistics",
                      "Data Visualization", "Product Design", "Graphics", "Video Editing", "Front End Development", "Back End Development", "Data Base", "Leadership" ]
  const countryList = [ "--Choose Country--","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showInput, setShowInput] = useState(true)
  const [showList, setShowList] = useState(true)
  const [showCvInput, setShowCvInput] = useState(true)
  const rootElementRef = useRef<HTMLDivElement>(null)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if(value === 'Consultancy') {
      setShowInput(false)
    }else (
      setShowInput(true)
    )

    if(value === 'Crash Course'){
      setShowList(false)
    } else (
      setShowList(true)
    )

    if(value === 'CV Review') {
      setShowCvInput(false)
    } else (
      setShowCvInput(true)
    )
  }
 

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
              <Form.Select aria-label="Select Service" value={selectedOption} onChange={handleSelectChange}>
                {options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
              <Form.Control
                className= {showInput ? 'hide' : 'show'}
                placeholder= "Add Additional Details"

                as='textarea'
              >
              </Form.Control>

              <Form.Select aria-label="Courses List" className={showList ? 'hideList' : 'showList'}>
                {courseList.map((course) => (
                  <option value={course} key={course}>
                    {course}
                  </option>
                ))}
              </Form.Select>
              
            </Form.Group>
            <Form.Group className={`mb-3 ${showCvInput ? 'hide' : 'show'}`} controlId="exampleForm.ControlInput1">
              <Form.Label>Upload your CV here</Form.Label>
              <Form.Control type="file"></Form.Control>

              <Form.Select aria-label="Country" className='mt-3'>
                {countryList.map((country) => (
                  <option value={country} key={country}>
                    {country}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          
            <Form.Group className={`mb-3 ${showInput ? 'hide' : 'show'}`} controlId="exampleForm.ControlInput1">
              <Form.Label>Appointment Date</Form.Label>
              {/* <Form.Control
                type="date"
                placeholder="Book Appointment"
                autoFocus
              /> */}

            <div ref={rootElementRef}>
              <PopupButton
                url="https://calendly.com/ifedolapo-ayoola95/30min"
                rootElement={rootElementRef.current!}
                text="Click here to schedule!"
              
              />
            </div>
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