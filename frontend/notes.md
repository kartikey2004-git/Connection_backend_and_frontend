::::::::::::::::::::::::::::::::::::::

Bundlers/Toolchain:

Bundlers are tools used in modern web development to bundle or package multiple files (such as JavaScript, CSS, images, etc.) into fewer files or even a single file, which improves the performance and efficiency of web applications. 

For example:
Webpack
Parcel
Rollup
Vite

::::::::::::::::::::::::::::::::::::::::

- key when mapping a array for  performance optimization and rendering efficiency.

- Helps React efficiently re-render only the items that changed.
- Prevents unnecessary DOM manipulations.


- API request hum kaise krte detailed study : Fetch , Axios , React Query


- Api request kaise bhej rhe h ? using fetch , using axios , using react-query


axios package gives the additional feature and functionaltity deta h over the top..

Axios is a popular JavaScript library used for making web requests or HTTP requests from a browser or Node.js environment. It simplifies sending asynchronous HTTP requests to REST endpoints..


- Axios for data kis tarike se aa rha h , kaise handle ho rha h , failed hogya toh kya situation hogi , loading h toh kya situation hogi , interrupt krke uss request mein kuch add krna h , all the production level features we get in axios

- there is no need to convert the response into json or not need to parse any data


- Promise-based : Axios uses Promises, making it easy to chain requests and handle asynchronous code.


- HTTP Methods:  Supports All HTTP Methods
Such as GET, POST, PUT, DELETE, PATCH


- Request & Response Interceptors : 

Request Interceptors: Modify or log requests before they are sent.

Response Interceptors: Handle or transform responses before they reach your application code.


- Automatic JSON Data Handling: Axios automatically transforms the request body to JSON for POST requests and the response body to JSON.

- Error Handling

- Support for older browsers: Axios works well with older browsers as it uses XMLHttpRequest under the hood, which has broad browser support.



::::::::::::::::::::::::::::::::::::::::::::::::


The useEffect hook in React allows you to perform side effects (such as data fetching, subscriptions, and manually changing the DOM) in function components. 

It runs after the component renders and can also clean up side effects when the component unmounts or before re-running.


Effect Runs After first Render and after every update ...


Cors ( Cross-Origin Resource Sharing ) provide safety to applications


- maan lijiye server kisi or domain/port pe chal rha hai and application khi or chal rhi hai...
koi bhi aake agar data le jayega toh server pe multiple request aa skti h...


- CORS, or Cross-Origin Resource Sharing, is a web security mechanism that allows web pages to access restricted resources from a server on a different domain than the one that served the page.....


Cross origin hoga if different url and different port hai



Solve the CORS

- Whitelist the URL : Whitelisting means allowing traffic or access from specific URLs (or IP addresses) on your server.


Detailed study of CORS : 

```
https://www.npmjs.com/package/cors

```

But in appwrite , we can't handle CORS like this is not allowed there , bcoz we install appwrite package there , hum waha pr public API ko req nhi kr rhe h


cloud ke andar jaake localhost add kiya tha and whitelisting kr rhe the , and humein vercel deployment mein uski bhi whitelisting krni padegi ....
 

proxy ki wajah se server ko lagega ki ye jo URL req huyi h ye origin huyi http://localhost:3000 se....


server ko lagega same origin se req aa rhi h with help of proxy



