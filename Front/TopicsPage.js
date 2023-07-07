import React from "react";


function TopicsPage (){
    return (
        <>
<h2>Web Dev Concepts</h2>
<nav>
    <a href="#servers" class="homepage">Web Servers</a>
    <a href="#design" class="homepage">Frontend Design</a>
    <a href="#optimizing" class="homepage">Optimizing Images</a>
    <a href="#stylesheets" class="homepage">Cascading Stylesheets</a>
    <a href="#JavaScript" class="homepage">JavaScript</a>
</nav>
        <article id="servers">
            <h3><strong>Web Servers</strong></h3>
        <p>In reference to web development and servers, <strong>index</strong> refers to 
            the path to resource. More specifically, index refers to the
            designated homepage on the web server. The file index.html in
            the root directory is called the homepage of the web application.
            Essentially, index acts like the gateway to the web application.
            The client will be directed to this page every time a <strong>GET</strong> request
            is received for the URL.
        </p>
        <p>In the browsers inspect tools, I can see response headers as well
            as request headers. I can also see a general tab that shows the 
            request method as well as the status code and remote address. In
            the version I loaded from my local computer, I see 3 files,
            index.html has a 200 status code and the others main.css and main.js 
            both of which failed with 404 status codes. In the version I loaded
            to a server the index.html file is now named the name I gave my file
            and there is an additional file named favicon.ico with a 200 status code.
        </p>
        <p>The favicon.ico file refers to the "favorites icon". The OSU server that
            I used to host the webpage automatically added the favicon. This is why
            the favicon.ico has a status code of 200, because it is working properly
            with the server. The main.css and main.js files however both have 404 
            Not Found status codes because there is no CSS or JavaScript in this current
            web page.
        </p>
        <p>Information about the URL can be found on the headers tab under general.
            The scheme is HTTPS which is a secure HTTP protocol, meaning that Information
            sent between the client and server is encrypted. The subdomain is web.engr 
            which is a subsection of the domain (or server name) oregonstate.edu. 
            The resources are /~norrijar/ and a1-norrijar/ where a1-norrijar/ is the 
            index.html file (or designated home page) and /~norrijar/ represents the 
            physical space on the server oregonstate.edu.
        </p>
        </article>
        <article id="design">
            <h3><strong>Frontend Design</strong></h3>
        <p>Frontend design refers to designing the frontend of a web application. The frontend 
            being the part of the application that the user interacts with. What's important in 
            frontend design is the usability experience for the user. This can include the graphical 
            user interface (GUI), visual design, and overall interactive experience. Usability is very 
            important for web applications because if the user finds the application difficult to use, 
            they can always go with a competitor's application. Not only should the design be easy to use, 
            it should be visually appealing as well. This can be achieved through color, fonts, and layout. 
            A good GUI will be easy to use, visually appealing, and accessible to everyone. 
        </p>
        <p>The 5 E's of frontend design are an easy way for designers to remember what's important when 
            designing a frontend. The 5 E's stand for effective, efficient, easy to navigate, error-free, and enjoyable.
            It's important for a frontend design to encompass all these attributes.
        </p>
        <dl>
            <dt><strong>Effective</strong></dt>
            <dd>The user accurately meets their goals</dd>
            <dt><strong>Efficient</strong></dt>
            <dd>User meets their goals in as few steps as possible</dd>
            <dt><strong>Easy to Navigate</strong></dt>
            <dd>Easy for any user to navigate the application whether or not they've used it before</dd>
            <dt><strong>Error-free</strong></dt>
            <dd>Avoid availability and accessibility issues by identifying common errors and roadblocks 
                the user may face
            </dd>
            <dt><strong>Enjoyable</strong></dt>
            <dd>The application provides an enjoyable and engaging experience that the user will want to 
                repeat
            </dd>
        </dl>
        <p><strong>Page layout tags</strong> are used to break up the content of the web page. They also help machines
            to navigate the web page so they know where to go for certain content. Some page layout 
            tags (such as headlines) also help with the readability of the webpage. There are also inline
            tags (such as strong) that further assist with readability and importance. There are 6 different headline tags 
            labeled h1 through h6. These add emphasis to a part of the webpage with h1 being the highest emphasis, and 
            h6 being the lowest. Section tags break the page into different sections which can further be broken down into 
            articles using article tags. All of these various tags are used to add styling to the different sections as well 
            as to help search engine bots. Paragraph tags and list tags (both ordered and unordered) help break down format 
            further into paragraphs and lists respectively.
        </p>
        <p><strong>Anchors</strong> are used to add hyperlinks to other webpages. These can be used to go to completely
            different websites, or they can be used to navigate between different pages of the current site.
            Anchors used within <strong>navigation</strong> elements can be used to link to different pages within the same site.
            This can be achieved by linking the navigation anchors to other HTML files in the same project folder.
            These anchors can also be stylized to look like buttons.
        </p>
        </article>
        <article id="optimizing">
            <h3><strong>Optimizing Images</strong></h3>
            <p>The six major specifications of images for the web are as follows. Each image needs a descriptive file name to 
                improve search engine optimization. The file name needs to include as many descriptive words as possible about 
                the image so search engine bots can find the image. The file size needs to be as small as it possibly can. 
                This is done to reduce load time and is achieved through either lossy or lossless compression. Exact dimensions 
                are required of the image so they won't load slowly. The correct file format of the image is another 
                required specification, such as JPG or PNG. The final two specifications are using a reduced resolution, and correct 
                color mode such as RGB. 
            </p>
            <p>JPG files are typically used for photographs while GIF file are typically used for line art. JPG files can compress down
                to small sizes while remaining rectangular, which makes them ideal for photographs. The only downside is higher image 
                compression reduces image quality. GIF files can have 8-bit transparency or animation, which makes them ideal for line 
                art graphics.
            </p>
        </article>
        <article id="stylesheets">
            <h3><strong>Cascading Stylesheets</strong></h3>
            <p>The main reasons to incorporate stylesheets into websites and apps is to improve usability, readability, legibility, and 
                adhere to brand requirements. HTML provides the basic structure, but it's the style sheets that make the website or application 
                truly unique.
            </p>
            <p>The five ways to incorporate styles are external, embedded, inline, JavaScript template literals, and regular JavaScript. Externally 
                linked are typically the most efficient and preferred method. This is achieved by linking to a global CSS file that contains the 
                stylesheets. Embedded stylesheets can be achieved through the HTML style tag so CSS can be directly embedded into the HTML file. 
                Another method is inline, where the CSS is written in the HTML tag directly. The JavaScript template literals method involves writing 
                CSS within a JavaScript function, while regular JavaScript involves manipulating the Document Object Model.
            </p>
        </article>
        <article id="JavaScript">
            <h3>JavaScript</h3>
            <p>
                The different data types in JavaScript are number, string, boolean, symbol, object, and a special data type for null or undefined.
                In JavaScript, all numbers are represented as double precision floating point. A JavaScript object is a name value pair and is used to 
                store values with the name as the key. We can create, read, update, and delete properties of an object. Arrays in JavaScript are objects 
                whose names are the strings '0', '1', '2' and so on. Arrays have similar properties to objects where instead we access the array values by 
                inputting the index in square brackets. The quotes to denote string are not neccessary. Conditionals and loops are used similarly to other 
                programming languages. There are if statements, else statements, else if statements, and if then else statements. JavaScript has while and 
                do while loops that are executed while a statement is true. It also supports for, for in, and for of loops which are counting loops. 
                Object oriented programming is where an object class is defined to control the identity, state, and behavior of an object. Modern JavaScript 
                supports object oriented programming and class creation. Functional programming allows functions to be assigned as variables, passed to other 
                functions, and returned from functions. JavaScript supports functional programming as well.
            </p>
        </article>
    </>
    );

}

export default TopicsPage