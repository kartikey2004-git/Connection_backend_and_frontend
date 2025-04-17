What to learn ?

- How to connect database securely through environment variables

- request ko padhke username , password le skte h or jo bhi data send kre wo bhi le skte h file wagerah and usko process krke jaha bhi send krna
  AWS , databases or cloudinary pe send krna h

Express.js : It's a minimal and flexible Node.js web application framework

- Routing (handling GET/POST/PUT requests)
- Middleware (to modify requests and responses)
- Creating REST APIs
- Handling forms and JSON data
- Connecting with databases like MongoDB or PostgreSQL

touch command to create file

common js mein code syncronously aata h and require wala syntax use krte h

ESmodules js mein import wala syntax use krte h and code asyncronously aata h

::::::::: CommonJS (CJS) ::::::::

CommonJS is the module system used in Node.js. It was developed before ES Modules and is designed for server-side JavaScript, although it can also be used in client-side environments with bundlers like Webpack.

Key Features:

• Synchronous loading: Modules are loaded synchronously, which works well for server-side but may not be ideal for browser-based environments.

• Used in Node.js: It is the default module system in Node.js.

• Exports and Imports: You use module.exports to export modules and require() to import them.

example::
module.exports
const math = require('./math.js');

• Dynamic imports
• Runs on Node.js by default
• No support for import/export syntax

::::::::::::::::::::::::::::::::::::::::::::

:::::::: ES Modules (ESM or Module JS)::::::

ES Modules, also known as ECMAScript Modules, are the standard JavaScript module system introduced in ECMAScript 2015 (ES6).

ES Modules are supported by modern browsers and are now also supported in Node.js (though they require a specific configuration).

Key Features:

• Asynchronous loading: Modules are loaded asynchronously, which is more suitable for browser environments and modern development.

• Used in both client and server: Supported natively in modern browsers and Node.js (with .mjs files or setting "type": "module" in package.json).

• Exports and Imports: You use export to export modules and import to import them.

for example:
import { add, subtract } from './math.js';
export const add = (a, b) => a + b;

• Static imports
• Browser and server compatibility
• import/export syntax


How javascript files assemble ? how can we get express files and assembled it --> in "type":"module"



npm run build 
dist folder jisme saare js, css , html files compile krdeta h and dist folder is serve hota h users ko

