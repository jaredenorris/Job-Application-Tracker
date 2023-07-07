import React, { useState } from "react";
import StaffRow from "../components/StaffRow";

function StaffPage() {


    const [results, setResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response) => {
            setResults(response.results);
        }) 
        .catch(() => {
            alert("Random user generator not responding")
        });
    };
    return (
        <>
        <h2>Staff</h2>
        <article>
            <p>
                This page uses an API <a href="https://randomuser.me/api/">Random User</a> 
                 to randomly generate staff members.
            </p>
            <p> Generate user with
            <button id="browser" onClick={fetchResults} value="browser call">Generate</button>
            </p>
            <table>
                <caption>Name, Email, Phone, Location</caption>
                <thead>
                    <tr>
                        <th>Portrait</th>
                        <th>Name &amp; Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((user, i) => <StaffRow user={user} key={i} />)}
                </tbody>
            </table>
        </article>
        </>
    );
}

export default StaffPage;