import React from "react"

function HomePage (){
    return (
        <>
        <article>
            <h2>Welcome to Jared Norris's Website</h2>
            <p>
                This site was developed using the MERN stack, consisting of MongoDB, Express, React, and NodeJs. It is a powerful combination 
            of technologies that enables the development of full-stack web applications. This stack leverages 
            JavaScript throughout the entire development process.
            
                MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. It allows developers to work with data 
            in a more natural and scalable way, as it does not rely on rigid table structures like traditional relational databases. MongoDB's document-oriented 
            approach makes it well-suited for handling large amounts of unstructured or semi-structured data.

                Express is a lightweight web application framework for NodeJs. It provides a simple and intuitive interface for building server-side applications, 
            handling HTTP requests, and managing routes. Express facilitates the creation of RESTful APIs, making it easier to interact with the backend and perform 
            CRUD (Create, Read, Update, Delete) operations on the MongoDB database.

                React allows developers to create reusable UI components and efficiently update the DOM by leveraging a virtual DOM. 
            React's component-based architecture enables the creation of highly interactive and responsive user interfaces.

                NodeJs is a runtime environment that allows developers to run JavaScript code outside the browser, on the server-side. It offers a non-blocking, 
            event-driven architecture, making it highly scalable and efficient for handling concurrent requests.
            </p>
        </article>

</>
    );

}



export default HomePage