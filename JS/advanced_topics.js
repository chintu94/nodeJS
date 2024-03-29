/*
! JS
1. Preprocessor and Postprocessors in CSS -> Generally speaking, pre-processing has its own stylesheet languages, such as Sass and LESS, that convert into pure CSS. Post-processing takes that basic CSS, and applies automation/repetition. So, CSS preprocessors (Sass, Less etc.) parse and compile a CSS extension language into plain old CSS, while postprocessors ( Autoprefixer, PostCSS and rework ) parse and process plain old CSS.

2. CRP -> The Critical Rendering Path is the sequence of steps that the browser goes through to convert the HTML, CSS and JavaScript code into pixels on the screen. Optimizing the critical render path improves render performance. There are 5 steps:
  a. Creation of DOM (Document Object Model) -> It is incremental. The HTML response is turned into tokens which turns into nodes which turns into the DOM Tree.
  b. Creation of CSSOM (CSS Object Model) -> The process is same, The CSS is turned into tokens which turns into nodes which turns into the CSS object model. The properties of a parent is cascaded down to its childrens, this is why we call it Cascading Style sheet. This is not incremental to avoid layouting and painting again.
  c. Render Tree -> The DOM and CSSOM are together formed a Render Tree. Any element with display none will be omited from the Render Tree, though its a part of the DOM tree.
  d. Layout -> Layout steps determines where the elements will be positioned in the screen.
  e. Paint -> This is the step when we are able to see the elements on the screen.

3. Difference between Observable and Promises -> They are as follows :
  1) A Promise handles a single event when an async operation completes or fails however qn Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.
  2) Observable are cancellable however Promises are not cancellable.
  3) While a Promise starts immediately, an Observable only starts if you subscribe to it. This is why Observables are called lazy.

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

29. SOLID principles -> They are a set of software designs principles which guide developers in building robust, maintainable applications while minimizing the cost of changes. They are :-
  S : Single responsibility principle -> A class, a module, or a function should be only responsible for one actor. So, it should have one and only one reason to change. This means that if a class's functionality is to manage HR related queries then it should only have methods related to that, if we add a method which deals with finance related queries in a HR class then if we need to update a function for the HR or finance department, you will have to change the whole class which will affecting both HR and finance. 
  O : Open-closed principle -> According to this principle, we should be able to add new features to applications easily, but we should not introduce breaking changes to the existing code.
  L : Liskov substitution principle -> The Liskov principle states that we should not replace a parent class with its subclasses if they create unexpected behaviors in the application.
  I : Interface segregation principle -> This principle is related to interfaces and focuses on breaking large interfaces into smaller ones.
  D : Dependency inversion principle -> Dependency inversion is all about decupling your code. Following this principle will give you the flexibility to scale and change your application at the highest levels without any issues.


! React

1. Synthetic events -> Whenever we are triggering an event in a React component, we are not actually dealing with the real DOM event, instead, we are dealing with React's custom event type, a synthetic event. All the onClick(s), onBlur(s), onChange(s) you have ever used in your react components, these are not the real ones, these are react's synthetic events😇. Another catchy benefit of synthetic events is that React reuses these events objects, by pooling them, which results in performance gains. Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.

2. Event pooling -> Event data is sent to the callback when an event fires, known as event pooling. The object is then cleaned up for later use. It means that we can't save event data in the state and then access it asynchronously, run a timeout, and reassess the event. To do that we have to call event.persist() method.

3. SSR in React -> Server side rendering is the process of rendering the complete HTML page on the server in response to a request and returning it to the client. First the client sends a get request to the server, then server gets any data it needs from the database, post that server combines the data with the html templete to make a complete html page and finally sends the complete HTML page back to the client. Once the client gets this HTML as a response, it follows the CRP to paint the page. Pros of SSR are 1. Fatser first contentful paint (FCP) and Time to Interactive (TTI), 2. SEO  optimized, 3. additional budget for client-side Javascript, 4. client computation and bandwidth offloded to the server. Cons of SSR are 1. Full page reload is required for some actions, 2. Since all the processing takes place in server , response may be delayed, 3. server code not optimized. We use the function <getServerSideProps>.

4. SSG in React -> Static site generation describes the process of building websites that render at build time. The output is an HTML file, assets such as JavaScript and CSS, and a few other static files. We use the function <getStaticProps>. The page will be pre-rendered at build time.

5. ISR in React -> Incremental Static Regeneration (ISR) enables you to use static-generation ( update static content instantly ) on a per-page basis, without needing to rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions of pages. Static pages can be generated at runtime (on-demand) instead of at build-time with ISR.

6. HOC -> A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic. 

7. Micro-Frontends -> The idea of micro front-ends is to bring the same advantages to the modern development workflow. It means breaking down monolithic projects into smaller, more manageable pieces, which are independently developed and owned by respective teams, with the power to build and ship simultaneously. This concept can provide great advantages like simple, decoupled codebases, autonomous teams, independent releases, and incremental upgrades. The development process is greatly accelerated, scaled, and made more efficient.

8. Error Boundary -> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    ? Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    ? You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      ? You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}

9. Compound components -> Compound components are a pattern in which components are used together such that they share an implicit state that lets them communicate with each other in the background. In other words, when multiple components work together to have a shared state and handle logic together, they are called compound components.

10. Render props -> A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

11. SPA and MPA in react ->  SPA (Single-page applications) is strongly decoupled, meaning that the front-end and back-end are separate. Single-page applications use APIs developed by server-side developers to read and display data. In MPA's (Multi-page applications), the front-end and back-end are more interdependent. All coding is usually housed under one project.

12. Environment Variables in React -> Using Environment variables is very important to keep your private information secure. It may contain your API keys or database credentials or any other private information. It's always recommended to use environment variables to keep the information secure and you should never write them directly in your code. Also, you need to make sure that, you add the environment variables file name to your .gitignore file so it will not be added to your Git repository when you push the code to the repository. Environment variables help because they can let you customize settings without changing the source code.

13. 

*/


/*
  Public Sepient 
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

  React JS:
    ? Able to render a component in loop and understands best practices related to key attribute
    ? Able to demonstrate use of fragments, useEffect, useState
    ? Able to style the component using traditional css or css-in-js
    ? Able to create nested components, and write clean JSX markup (and uses atomic design principle)
    ? Able to do conditional rendering
    ? Able to import & export components through different files (both default and named exports)
    ? Able to create form and handle submitting data using Ajax
    ? Able to bind events to form submit and add validation to form fields
    ? Able to write functional unit test cases for react component using enzyme/RTL (not snapshot)
    ? Able to demonstrate handling error using error boundries
    ? Has worked with various rendering patterns in React and Next JS e.g. SSR, CSR, SSG, ISR and able to define them
    ? Able to define purpose of useRef with real life use cases and best practices
    ? Able to explain usecases for using Context API and how to use it with useReducer pattern
    ? Able to explain and create react specific design patters e.g. Custom Hooks, Higher Order Components, Render Props, Compound Component, etc
    ? Able to explain react routing/next routing 
    ? Able to explain route based chunking, react lazy and suspense
    ? Able to give PoV on SPA and MPA
    Understands public and private npm registry and publishing of packages
    ? Able to explain using environment variables using dotenv module
    ? Able to explain importance of logging in server application, and best practices around logging like log levels and log redaction
    ? Able to give PoV on various state management techniques e.g. Redux, redux toolkit, react-query, recoil, jotai, context api, xstate, Apollo Client, etc. 
    ? Able to give explain handling of side-effects with state management library (e.g. redux thunk, saga, etc)
    ? Able to demonstrate memoization in react using useMemo and useCallback and explain different use cases for each of them
*/