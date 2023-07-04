/*
1. Preprocessor and Postprocessors in CSS -> Generally speaking, pre-processing has its own stylesheet languages, such as Sass and LESS, that convert into pure CSS. Post-processing takes that basic CSS, and applies automation/repetition. So, CSS preprocessors (Sass, Less etc.) parse and compile a CSS extension language into plain old CSS, while postprocessors ( Autoprefixer, PostCSS and rework ) parse and process plain old CSS.

2. CRP -> The Critical Rendering Path is the sequence of steps that the browser goes through to convert the HTML, CSS and JavaScript code into pixels on the screen. Optimizing the critical render path improves render performance. There are 5 steps:
  a. Creation of DOM (Document Object Model) -> It is incremental. The HTML response is turned into tokens which turns into nodes which turns into the DOM Tree.
  b. Creation of CSSOM (CSS Object Model) -> The process is same, The CSS is turned into tokens which turns into nodes which turns into the CSS object model. The properties of a parent is cascaded down to its childrens, this is why we call it Cascading Style sheet. This is not incremental to avoid layouting and painting again.
  c. Render Tree -> The DOM and CSSOM are together formed a Render Tree. Any element with display none will be omited from the Render Tree, though its a part of the DOM tree.
  d. Layout -> Layout steps determines where the elements will be positioned in the screen.
  e. Paint -> This is the step when we are able to see the elements on the screen.

3. SSR in React -> Server side rendering is the process of rendering the complete HTML page on the server in response to a request and returning it to the client. First the client sends a get request to the server, then server gets any data it needs from the database, post that server combines the data with the html templete to make a complete html page and finally sends the complete HTML page back to the client. Once the client gets this HTML as a response, it follows the CRP to paint the page. Pros of SSR are 1. Fatser first contentful paint (FCP) and Time to Interactive (TTI), 2. SEO  optimized, 3. additional budget for client-side Javascript, 4. client computation and bandwidth offloded to the server. Cons of SSR are 1. Full page reload is required for some actions, 2. Since all the processing takes place in server , response may be delayed, 3. server code not optimized. 

4. Webpack -> Webpack budles all the HTML, CSS, JS, images files together to form static assets ready for deployment. Its setup is done by installing the packages like webpack, webpack-cli, webpack-dev-server. Post this we create a webpack.config.js file, which will have path and html-webpack-plugin packages imported. we define a module.export object with `output` as the path of bundle.js file, `plugins` for the html file, devserver ports and module rules. We also need to add the scripts for build command using <webpack --mode production>. Post running the command it creats the bundle.js file.

5. Web Components -> It allows us to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

6. AJAX call ->  Ajax stands for Asynchronous JavaScript and XML. It is used to make asynchronous communication with the server. Ajax is used to read data from the server and update the page or send data to the server without affecting the current client page. We use methods like xhr.open(), xhr.onreadystatechange and xhr.send()

7. Promises methods -> all, allSettled, race, any.

8. Testing in Vanilla JS -> Using Jest , which has test method and inside it we can use epect keyword with toBe assertion.

9. Event handeling -> The change in the state of an object is known as an Event. In html, there are various events which represents that some activity is performed by the user or by the browser. When javascript code is included in HTML, js react over these events and allow the execution. This process of reacting over the events is called Event Handling. Thus, js handles the HTML events via Event Handlers.

10. Stage Web Servers -> A staging environment mimics the production environment to perform final QA checks on application. Staging environments help to ensure quality under a production-like environment by protecting your server from code that was unlikely going to work. one example is nginx.

11. DOM

12. Specificity inheritence ->  Specificity :- If multiple style blocks have different selectors that configure the same property with different values and target the same element, specificity decides the property value that gets applied to the element. Inheritance :- also needs to be understood in this context — some CSS property values set on parent elements are inherited by their child elements, and some aren't. properties like color and font-family

13. Cascading in CSS -> CSS is cascaded top to bottom meaning the style that is defined last in the stylesheet is the one that will be applied.

14. useMemo and useRef 
15. Redux and context API
16. System design
17. Suspense and Lazy Loading

18. Call by Value (Primitive data type) -> This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.

19. Call by Refrence (non-primitive data type)  -> If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory. Actual and copied variables are created in the same memory location.

20. Security - CORS, CSRF -> Cross-Origin Resource Sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). CORS header "Access-Control-Allow-Origin" set to accept all. However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF). CSRF can be prevented with the use of a CSRF token along with the request.

21. Client-side storage ->  It consists of JavaScript APIs that allow you to store data on the client (i.e. on the user's machine) and then retrieve it when needed. This has many distinct uses, such as:
  i. Saving web application generated documents locally for use offline
  ii. Saving data and assets locally so a site will be quicker (and potentially less expensive) to download, or be usable without a network connection.
 Below are some client-side storages:
 Old school: Cookies -> they are still used commonly to store data related to user personalization and state, e.g. session IDs and access tokens.
 New school: Web Storage and IndexedDB ->Web Storage is local storage and session storage. However The IndexedDB API provides the browser with a complete database system for storing complex data. This can be used for things from complete sets of customer records to even complex data types like audio or video files. Operations performed using IndexedDB are done asynchronously, so as not to block applications. IndexedDB is a database that is built into a browser, much more powerful than localStorage. It Stores almost any kind of values by keys, multiple key types, Supports transactions for reliability, Supports key range queries, indexes, Can store much bigger volumes of data than localStorage.

22. Web Workers API -> Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application. The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.

23. CSS Modules -> They are a step during the build process that changes class names and selectors to be scoped meaning the classes are dynamically generated, unique, and mapped to the correct styles, specific to that component. We Default import the style.css file into the JS file and use it as an object in the style properties of JSX.

24. Monorepo -> A monorepo (mono repository) is a version management configuration that stores many projects in one repository. The projects can be unrelated and can be completely distinct. Its main advantage is it gives a visibility of the entier code base without the need of cloning diffrent repos, in addition it provides consistancy and dependancy managment. Its also ideal for CI/CD as the code is already unified by default, making it much easier to build and test together. One tool we can use for this is NX. 

25. Debounce -> Debounce waits for a set interval after the event, to see if the event is getting triggered again, if the event is not triggered again within the set interval then it will call the function but if an event is triggered within the set interval then it clears the last timer and starts a new one. 

function debounce (cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

26. Throttle -> Throttle calls the function immidietly and then waits for a set delay before calling it again on event trigger.

function throttle(cb, delay = 1000){
  let shouldwait = false;
  return (...args) => {
    if (shouldwait) return;
    cb(...args)
    shouldwait = true;
    setTimeout(() => {
      shouldwait = false;
    }, delay)
  }
}

28. stopImmediatePropagation -> The stopImmediatePropagation() method prevents other listeners of the same event from being called.

*/


/*

  HTML,CSS :
    ? Able to create Form in native HTML and submit without JS. 
    ? Able to add validations to form. Knows how to use FormData API. 
    ? Able to explain browser side storage (cookies / localstorage / sessionstorage / indexeddb)
    ? Responsive Design (Mobile and Desktop first), Media Queries. 
    ? Responsive Images -> using max-width to some size and height as auto.
    ? Layout - [flex, grid, float], display, postitioning. 
    ? Understands CSS Concepts like: CSSOM, Rules, Selectors and Property values, Cascading, Inheritance, Specificity  Postprocessors (SCSS/SASS) / Preprocessors (PostCSS), Frameworks (Tailwind, Chakra, Bootstrap).
  JS:   
    ? CSS-in-JS (Styled Components, Emotion, CSS Modules) 
    Loops/map, Promises (then-catch, async-await, promise.all) Fetch API.
    Able to create modules, and use import and export statement
    Able to explain usecases for deboune and throttle.
    Able to modify and transform objects  in JS.
    Hands on coding exercise to cover following topics:
    Event Listeners (Able to use following: addEventListener, event object, stopPropagation, preventDefault)
    DOM Manipulation (querySelector, querySelectorAll, innerHTML, DOM Fragments[optional])
    Has experience of writing Unit Test cases in previous projects using Jest/Karma/Jasmine/Mocha/Enzyme/RTL
    Has experience in writing functional test cases (not snapshot testing)
    Able to tell test cases to be written for a given scenarioAble to explain HTTP API mocking and browser API methods mocking (e.g. mocking localstorage)  also check on security, performance and accessibility
    Tooling :Has experience of using & configuring following tools:
    Linters - Pa11y, ESLint, Sonar
    Formatters - Prettier
    ? stagedWebServers - Apache/Nginx
    ? Bundlers: Able to explain concept of Monorepo and related tools (nx, turborepo)
    ? Experience configuring a module bundler - webpack/esbuild/rollup/vite
*/