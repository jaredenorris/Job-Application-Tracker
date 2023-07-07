import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Job({ job, onEdit, onDelete }) {
    return (
        <tr>
            <td>{job.company}</td>
            <td>{job.date}</td>
            <td>{job.responded}</td>
            <td>{job.number}</td>
            <td><MdDeleteForever onClick={() => onDelete(job._id)} /></td>
            <td><MdEdit onClick={() => onEdit(job)} /></td>
        </tr>
    );
}

export default Job;