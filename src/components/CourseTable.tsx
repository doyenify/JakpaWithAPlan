import React from 'react';
import Table from 'react-bootstrap/Table';
import Bookaservice from './bookaservice/Bookaservice';

interface CourseTableProps {
    id: number
    courseName: string;
    courseDate: string;
  }

const CourseTable:React.FC<CourseTableProps> = (props: CourseTableProps) => {
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Course Name</th>
                    <th>Available Date</th>
                    <th>Enroll</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{props.id}</td>
                    <td>{props.courseName}</td>
                    <td>{props.courseDate}</td>
                    <td><Bookaservice /></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default CourseTable;