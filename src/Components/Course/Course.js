import React from 'react';
import './Course.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => {
    const {title, name, price} = props.course;
    const enrollButton = props.enrollButton;
    return (
        <div className="course">
            <div className="card">
            <h5 className="card-header">{title}</h5>
                <div class="card-body">
                    <h5 class="card-title">Instructor: {name}</h5>
                    <p class="card-text">${price}</p>
                    <button class="btn btn-primary" onClick={()=>enrollButton(props.course)}>Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;