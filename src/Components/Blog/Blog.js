import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mt-4'>
            <h1>Difference between javaScript and node.js...</h1>
            <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. <br />
            JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
            JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML. <br />
            JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development
            </p>
            <h1>When should I use mongodb?</h1>
            <p>MongoDB is basically an Open Source cross platform document oriented DB program, often classified as NoSQL DB program. What it means is that instead of the traditional table based RDBMS, the emphasis is on JSON with dynamic schemas. <br />
            There has been a lot of talk in recent years about NoSQL databases. Databases such as MongoDB have stepped in as an answer to businesses’ need for agility, performance, and scale. Hence, NoSQL databases can support a wide set of use cases, including exploratory and predictive analytics in real-time.
             </p>

             <h1>Difference between sql and NoSQL..</h1>
             <p>SQL stands for Structured Query Language, which is the language used when communicateing with databases.
             SQL allows you to create, read, update, and delete—also known as CRUD operations—through a universal language that is pretty much consistent across multiple underlying relational
             In a relational database engine, you typically interact with tables. <br /> In terms of storage, the pattern is concentrated. So in a relational database engine, there's typically one node that contains the entirety of your data; it's not partitioned or segregated in any way unless you're using some advanced strategies.
             There are two approaches in terms of scale
             <br />
             NoSQL is basically anything that is non-relational. If you need humongous data storage and a distributed data store, a NoSQL database fulfills those needs.
             elational database management systems use SQL syntax to store and retrieve data for further insights. On the other hand, a NoSQL database system encompasses a wide range of database technologies that can store data that is structured, semi-structured, unstructured, or polymorphic.
             NoSQL is very implementation-dependent in terms of structure (as I said earlier, these are table, document, and graph implementations)
             In terms of storage, NoSQL relies on hashing the input. So if you have a key, the key is passed to a hashing function, and the result of the hashing function is a value distributed onto one of the multiple nodes. <br />
             The real advantage of NoSQL is horizontal scaling—aka sharding—a method of splitting and storing a single logical dataset in multiple databases.
             </p>


             <h1>
             What is the purpose of jwt and how does it work?
             </h1>

             <p>
             The usual way to manage users’ sessions in a PHP application is to use session cookies, named “PHPSESSID” by default. When a user connects to the application, it generates a unique session identifier, that is stored on the server and then returned to the client with the “Set-Cookie” header. With that, the session cookie is stored on the web browser.
             Cookies are designed to be systematically sent back to the server, on every request. That solution is a good way to handle usual user login and logout scenarios.
             <br />
             JSON Web Tokens (JWT) are tokens generated by the server upon user authentication on a web application, and then sent to the client (usually a browser).

These tokens are then sent on every HTTP request, which allows the server to authenticate the user.

To ensure integrity, information contained in the token is signed by a private key, owned by the server. When the server gets the token back from the client, it just has to compare the signature sent by the client with the one it will generate with its private key. If the signatures are identical, the token is then valid.
              
             </p>
        </div>
    );
};

export default Blog;