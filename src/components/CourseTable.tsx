import React from 'react';
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
            <tr>
                <td>{props.id}</td>
                <td>{props.courseList}</td>
                <td>{props.date}</td>
                <td>{props.duration}</td>
                <td>{props.feeNaira}</td>
                <td><CourseForm /></td>
            </tr>
    )
}

export default CourseTable;