# Theory Assignment 01:

● What is Emmet?
A plugin for code editors (e.g., VS Code).
Speeds up HTML/CSS writing using abbreviations.
Example: div>ul>li*3 expands into a full HTML structure.
Saves time and improves productivity.
 -------------------------------------------------------
● Difference between a Library and Framework?
Library:
Collection of functions you call.
You control the flow.
Example: React.

Framework:
It calls your code.
Framework controls the flow (Inversion of Control).
Example: Angular, Vue.
-----------------------------------------------------------

● What is CDN? Why do we use it?
CDN (Content Delivery Network) is a network of distributed servers that deliver content (like JS files, CSS, images)
quickly to users based on their geographical location.
Why use it?
Faster load time
Reduced server load
Global availability
Caching and reliability

-----------------------------------------------------------------
● Why is React known as React?
React is named for its reactive nature—it reacts to changes in data and updates the UI efficiently. The name emphasizes:
Reusability of components
Reactive updates to the DOM
Declarative UI design

-------------------------------------------------------------------------

● What is crossorigin in script tag?
The crossorigin attribute in <script> tells the browser how to handle CORS (Cross-Origin Resource Sharing) for the
script:
anonymous: Makes a CORS request without credentials
use-credentials: Sends credentials like cookies
Used when loading resources (like JS files) from another domain and for proper handling of errors in console

-----------------------------------------------------------------------

● What is difference between React and ReactDOM
React: Core library for building components and managing state/UI logic.
ReactDOM: Handles rendering React components to the DOM in web apps.

------------------------------------------------------------------------

● What is difference between react.development.js and react.production.js files via CDN?
react.development.js:
Unminified
Includes helpful warnings, error messages
Used during development

react.production.js:
Minified and optimized
No warnings or debug info
Used in production (live websites)

-----------------------------------------------

● What is async and defer?
Both control how scripts are loaded asynchronously to avoid blocking the HTML parsing.
Use async when script doesn’t depend on others.
Use defer when order matters and script interacts with DOM.

# Theory Assignment 02:

● - What is `NPM`?
It's a tool to install, manage, and share packages (libraries/tools) in JavaScript projects.
Comes bundled with Node.js.
Example: npm install react
-------------------------------------------------
● - What is `Parcel/Webpack`? Why do we need it?
These are module bundlers for JavaScript projects.
They bundle JS, CSS, HTML, images, etc. into optimized files for production.
Why we need them:
Combine and minify files
Optimize loading speed
Handle modern JavaScript (ES6+) and convert to browser-compatible code
-----------------------------------------------------
● - What is `.parcel-cache`?
A folder created by Parcel.
Stores intermediate build results to speed up future builds.
Can be deleted (Parcel will recreate it), but it helps with faster performance.
-----------------------------------------------------------------
● - What is `npx` ?
A tool to execute Node.js packages without installing them globally.
Example: npx create-react-app my-app
Runs the command directly from the npm registry.
----------------------------------------------------------------
● - What is difference between `dependencies` vs `devDependencies`
dependencies Needed in production Examples: React, Axios
devDependencies Needed only during development Examples: ESLint, Parcel, Jest
------------------------------------------------------------------------
● - What is Tree Shaking?
A technique to remove unused code from the final bundle.
Helps in reducing file size and improving performance.
Works with ES6 module system (import/export).
--------------------------------------------------------------------
● - What is Hot Module Replacement?
A feature in bundlers like Parcel/Webpack.
Updates only the changed module in the browser without full page reload.
Improves development speed and preserves state.
--------------------------------------------------------------------
● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
Zero Configuration
Built-in Hot Module Replacement
Fast bundling with caching
Tree shaking and minification
TypeScript and JSX support out-of-the-box
Describe any 3:
Zero Config: Parcel works without setting up complex configs like Webpack. You just start coding.
HMR: As you edit your code, Parcel refreshes only the changed parts instantly.
Built-in Support: Parcel supports TypeScript, JSX, SCSS, images, etc., without installing separate plugins.
-----------------------------------------------------------------------------------------
● - What is `.gitignore`? What should we add and not add into it?
A file that tells Git which files/folders to ignore.
Prevents unnecessary or sensitive files from being pushed to GitHub.
What to add:
node_modules/
.env
.parcel-cache/
dist/
log files
What NOT to add:
Source code
Public config files
package.json
-----------------------------------------------------------------
● - What is the difference between `package.json` and `package-lock.json`
package.json -Lists project dependencies, You edit this manually, Human-readable
package-lock.json - Locks exact versions of those dependencies, Auto-generated by npm, Machine-focused for consistency
--------------------------------------------------------------
● - Why should I not modify `package-lock.json`?
It's auto-generated.
Ensures consistent installs across all systems.
Manual changes can break dependency resolutions.
------------------------------------------------------------
● - What is `node_modules` ? Is it a good idea to push that on git?
A folder where npm stores all downloaded packages.
No, never push it to Git (it's huge and regenerable).
Add it to .gitignore.
--------------------------------------------------------------------
● - What is the `dist` folder?
Short for “distribution”.
Contains the final production-ready code bundled by Parcel/Webpack.
You do not edit this folder manually.
------------------------------------------------------------------
● - What is `browserlists`
A config in package.json to tell tools like Babel/Autoprefixer which browsers to support.
Helps in generating compatible code.
-----------------------------------------------------------------
Read about dif bundlers: vite, webpack, parcel
Vite: Super fast build tool with native ES modules and hot reload.
Parcel: Zero-config bundler with built-in HMR, caching.
Webpack: Highly customizable but needs configuration.
-----------------------------------------------------------------
● Read about: ^ - caret and ~ - tilda
^ Allows updates that do not change the first major version (^1.2.3 → 1.x.x)
~    Allows patch updates (~1.2.3 → 1.2.x)
-----------------------------------------------------------------------
● Read about Script types in html (MDN Docs)
Common script types:
text/javascript (default, can be omitted)
module (for ES6 modules, supports import/export)
application/json (for embedding JSON in script tags)
importmap (to define module imports in browser)
-------------------------------------------------------------------------

