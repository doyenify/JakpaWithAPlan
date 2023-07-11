import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import "./courselist.css";
import CourseTable, { CourseTableProps } from "../CourseTable";

function CourseList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState<CourseTableProps[]>([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://us-central1-doyenifypanelapi.cloudfunctions.net/app/courses"
      );
      const jsonData = await res.json();
      setData(jsonData);

      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Button
        className="courselist-btn mx-2 Px-5 "
        style={{ backgroundColor: "#044163" }}
        onClick={handleShow}
      >
        Course List
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            {" "}
            Our Range of Courses
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: "14px" }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Pricing</th>
                <th>Enroll</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data?.map((item: any, key: number) => (
                  <CourseTable
                    key={item.id}
                    id={key}
                    courseList={item.CourseName}
                    date={item.Cohort}
                    duration={item.Duration}
                    feeNaira={item.Price}
                  />
                ))
              ) : (
                <tr>
                  <td>No data available</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CourseList;
