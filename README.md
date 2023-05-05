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

2. Cluster -> NodeJS is build upon the concept of single-threaded programming, a single instance of NodeJS runs in a single thread, to take advantage of multi-core systems the user will sometimes launch a cluster of NodeJS processes to handle the load.A cluster can be added this way :-

const cluster = require('cluster');

if(cluster.isWorker){
    console.log('child thread');
} else {
    console.log('parent thread');
    cluster.fork();
    cluster.fork();
}

3. Global -> Global objects in NodeJS are available in all Modules. For Example : __dirname, __filename, exports, module, require.

4. Error Handling -> Node JS applications experience 4 types of errors: Standard JS errors like Syntax error and Type error ; System errors like File does not exists, closed socket ; User-specified errors ; Assertion errors happens in case of logical violation. We can handle errors by using try and catch blocks.

5. Streaming -> Streams are objects that let you read and write data continuously. There are four types of streams: Readable; Writable; Duplex (Both readable and writable); Transform (streams that can manipulate data while being read or written) 

6. Buffer -> JS has no mechanism for reading or manipulating streams of binary data. Buffer allows JS achieve that. an empty buffer of length 10 can be created by this method :
const buf = Buffer.alloc(10);

7. Domain -> It provides a way to handle different I/O operations as a single group. Domain module intercepts errors that remain unhandled. Two methods for intercepting are Internal Binding (Error emitter executes its code inside the run method) and External Binding (Error emitter is explicitly added to a Domain via its add method).

8. DNS -> It is used to connect DNS server and perform name resolution for ex: it is used to look up the IP addresses of the host names. DNS module can also be used for performing name resolution without a network connection. 

9. Debugger ->  NodeJS includes a built-in debugging client. Debugger can be used in the terminal by using the 'inspect' keyword like this < node inspect myScript.js >.


# Node JS Express Framework

Express is a flexible NodeJS web application framework which provides a wide set of features to develop both web and mobile applications

Some Core features of express are :
1. It can be used to design single-page, multi-page and hybrid web applications
2. It allows to setup middlewares to respond to HTTP requests 
3. It defines a routing table which is used to perform different actions based on HTTP method and URL 
4. It allows to dynamically render HTML Pages based on passing arguments to templates



# Node JS Architecture

NodeJS uses "Single Threaded Event Loop" architecture allows you to handle multiple concurrent clients at the same time its a very flexible way of being able to scale up your support for many clients. In addition to that NodeJS processing module is based on the JS Event based model along with the JS callback mechanism.

# NodeJS Event Loop

The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.