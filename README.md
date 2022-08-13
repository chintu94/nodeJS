# nodeJS
NodeJs Tutorial

Web Application consists of broadly three parts CLient (made using JS frameworks), Server (made using Programming languages like Node JS , Python, PhP) and database (mainly MYSQL, MongoDB).

NodeJS is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. It is used to develope sever-side, I/O intensive web applications like video streaming sites , online web application etc.

Why?
Node is really fast,
Node Package Manager (npm),
All apis are async, meaning it never waits for an api to return the data,
Open source

Parts of NodeJS

1. Modules -> They are JS libraries that can be used in a Node JS application  to include a set of functions, To include a module in a Node JS application, use require() function with parenthesis containing the name of the module.

2. Cluster -> NodeJS is build upon the concept of single-threaded programming, a single instance of NodeJS runs in a single thread, to take advantage of multi-core systems the user will sometimes launch a cluster of NodeJS processes to handle the load.
A cluster can be added this way :-

const cluster = require('cluster');

if(cluster.isWorker){
    console.log('child thread');
} else {
    console.log('parent thread');
    cluster.fork();
    cluster.fork();
}
3. Global ->