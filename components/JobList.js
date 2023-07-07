import React from 'react';
import Job from './Job';
import { Link } from 'react-router-dom';


function JobList({ jobs, onDelete, onEdit }) {
    return (
        <table id="jobs">
            <caption>Add and Edit Jobs</caption>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Responded</th>
                    <th>Number</th>
                    <th>Delete</th>
                    <th><Link to="../EditPage">Edit</Link></th>
                    <th><Link to="../CreatePage">Add</Link></th>

                </tr>
            </thead>
            <tbody>
                {jobs.map((job, i) => 
                    <Job 
                        job={job} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default JobList;
