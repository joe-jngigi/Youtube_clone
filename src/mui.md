# Youtube_clone_mui
*It Uses Matarial Ui*
MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.

*Uses Tailwind to style*
This eases the styling and also it will be easier to achieve responsivity

*RAPID API*
Uses an VS code extension to test api
Fetch data from unlimited sources; working with APIS

**Axios**
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

### NPM
`npm install --legacy-peer-deps` ==> This installs, the exact dependencies used in this project

### Using Tailwind with MUI
* MUI works with tailwind ELSE IF it doesn't;
* Install the tailwind dependencies.
* Using Tailwind with MUI requires to understand 'CSS injection order'. In the tailwind.config.js, use `important: '#root',`
* #root is the HTML root id.
* Use the StyledEngineProvider in the index.js to render App component, this will overide the MUI CSS and injectfirst
## MAU (Material UI)
Box - Used in the Apps component, it is simply like a div container
Stack - Navbar, used for 1D layout; row or column - like flex
