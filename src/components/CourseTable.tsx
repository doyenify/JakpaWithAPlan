import React from 'react';
import Table from 'react-bootstrap/Table';
import CourseForm from './CourseForm';

export interface CourseTableProps {
    id: number
    courseList: string;
    date: string;
    duration: string;
    feeNaira: string;
  }

const CourseTable:React.FC<CourseTableProps> = (props: CourseTableProps) => {
    return (
        <>
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
                    <tr>
                    <td>{props.id}</td>
                    <td>{props.courseList}</td>
                    <td>{props.date}</td>
                    <td>{props.duration}</td>
                    <td>{props.feeNaira}</td>
                    <td><CourseForm /></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default CourseTable;