import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {

    const [company, setCompany]       = useState();
    const [date, setDate]         = useState();
    const [responded, setResponded] = useState();
    const [number, setNumber] = useState();
    
    const redirect = useNavigate();

    const addJob = async () => {
        const newJob = { company, date, responded, number };
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfuly added!`);
            redirect("/LogPage");
        } else {
            alert(`Document not successfully added: status code = ${response.status}`);
            redirect("/LogPage");
        }
    };


    return (
        <>
        <article>
            <h2>Adds application to the database</h2>
            <p>This page will add th user input to the database.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
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
                        type="submit"
                        onClick={addJob}
                        id="submit"
                    >Add</button> to the database</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;