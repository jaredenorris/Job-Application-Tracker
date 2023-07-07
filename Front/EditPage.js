import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditPage = ({job}) => {

    const [company, setCompany]       = useState(job.company);
    const [date, setDate]         = useState(job.date.slice(1, 10));
    const [responded, setResponded] = useState(job.responded);
    const [number, setNumber] = useState(job.number);
    
    const redirect = useNavigate();

    const jobEdit = async () => {
            const response = await fetch(`/log/${job.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                company: company,
                date: date,
                responded: responded,
                number: number
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert(`Successfuly edited!`);
            redirect("/LogPage");
        } else {
            const errMessage = await response.json();
            alert(`Document not successfully edited: status ${response.status}. ${errMessage}`);   
        redirect("/LogPage");}
        
    };


    return (
        <>
        <article>
            <h2>Edit application in the database</h2>
            <p>This page will edit the application in the database.</p>
            <form>
                <fieldset>
                    <legend>Please fill out the form</legend>
                    <label for="company">Company Name</label>
                    <input
                        type="text"
                        placeholder="Company Name"
                        value={company}
                        onChange={e => setCompany(e.target.value)} 
                        id="company" />
                    
                    <label for="date">Date Applied</label>
                    <input
                        type="date"
                        value={date}
                        placeholder="Date of application"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="responded">Responded</label>
                    <input
                        type="text"
                        placeholder="Whether or not employer responded"
                        value={responded}
                        onChange={e => setResponded(e.target.value)} 
                        id="responded" />

                    <label for="number">Number</label>
                    <input
                        type="number"
                        placeholder="number of application"
                        value={number}
                        onChange={e => setNumber(e.target.value)} 
                        id="number" />


                    <label for="submit">
                    <button
                        onClick={jobEdit}
                        id="submit"
                    >Edit</button>the database</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditPage;
