import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobList from '../components/JobList';


function LogPage({ setJob }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [jobs, setJobs] = useState([]);

    // RETRIEVE the entire list of jobs
    const loadJobs = async () => {
        const response = await fetch('/log');
        const jobs = await response.json();
        setJobs(jobs);
    } 
    

    // UPDATE a single job
    const onEditJob = async job => {
        setJob(job);
        redirect("/EditPage");
    }


    // DELETE a single job  
    const onDeleteJob = async id => {
        const response = await fetch(`/log/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const jobs = await getResponse.json();
            setJobs(jobs);
        } else {
            console.error(`Failed to delete job with _id = ${id}, status code = ${response.status}`)
        }
    }

    // LOAD all the jobs
    useEffect(() => {
        loadJobs();
    }, []);

    // DISPLAY the jobs
    return (
        <>
            <h2>List of Job Applications</h2>
            <p>This is a list of jobs I applied to including: the date
                I applied, whether they responded, and the number of the application.</p>
            <JobList 
                jobs={jobs} 
                onEdit={onEditJob} 
                onDelete={onDeleteJob} 
            />
        </>
    );
}
  

export default LogPage;