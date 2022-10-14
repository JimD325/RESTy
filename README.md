# Component Based UI

# Lab 29 Track History
## Requirements
- track every API call and store it in history

## User Story
- As a user, I want to see a list of my previous API calls, so that I can see the results again

## Application Flow
1. User enters an API URL
2. Chooses a REST method
3. Clicks the "Go" Button
4. application fetches data from the URL given, with the method specified
5. Application stores the API request and returned data into state.
    - updates the list of previous API calls. 
6. Application deplays the response headers and results separately. 
    - both headers and results should be "pretty printed" JSON

## Techincal Requirements
1. Replace any component state managements to use derived state from useReducer with a reducer function and an initial state. 

## Deployment
- Deploy application to GitHub Pages useing a GitHub action which will publish the build to the ```gh-pages``` branch of your repo on all check-ins. 

## Additional Goals
- Store the history in local storage as well as in state
- when the app loads, use an effect to read from local storage and put that history into your state right away. 

# concepts researched during lab 29
### [Typescript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- In TypeScript, checking the type focuses on the "shape" that values have. 
- This is called "duck typing", and says that an object is of a given type if it has all methods and properties required by that type. 
- in typescript, interface is used to name the types of objects based on their shape. 

### [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
- Is alternative to useState
- accepts a reducer of type ```(state, action) => newState```
- Where state is current state, action is what you are doing to the current state, and newState is the result of the action being applied to the current state. 
- useReducer is best used when you have very complex state logic, or when the next state depends on the previous one. 
 
# Lab 28
## Requirements
- Connect RESTy to live APIs to fetch and display remote data. Initial focus will be for GET requests. 

## User Story
- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it's data. 
- as a user, I want to see the results returned from an API request in my browser in a readable format

## Application Flow
1. User enters an API URL
2. Chooses a REST method
3. Clicks the "Go" button
4. Application fetches data from the given URL, with the method specified. 
5. displays the response headers separately from the results
6. both headers and results should be "pretty printed" JSON. 

## Technical requirements
1. Refactor application methods to allow for browser side HTTP requests to be sent.
    - this should allow for the user to set a URL, method, and request body.
    - will use JavaScript's fetch
2. Make sure all relevant request and response data is displayed to the user. 

## Testing
- Will be done using React Testing Library Framework.
- Assert than on Submission the form will result in data being rendered in the output area. 
- Mock the API request with React Testing Library

## Deployment
- Deploy application to GitHub pages uses GitHub actions which will publish the build to gh-pages branch of your repo an all check- ins. 

# Concepts explored/researched during this Project
## Lab 28
### [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Simplest use of fetch simply takes the parth of the resource you want and returns a promise that resolves with a response object. 
- that response object does not have the actual JSON response body, but a representation of the entire HTTP response. 
- you extract the JSON body content from res object using the json() method, which returns a second promise which resolves with the result of a JSON. 

## Lab 27
### Testing Library
![ReactTestingQueryTable](/img/ReactTestingQueryTable.PNG)
- getBy will return the matching node for the query, throws error if no match
- queryBy will return matching node for query, null if no match. Useful for asserting that an element is NOT present. 
- FindBy returns a promise which will resolve when an element is found which matches the query. has 1000ms to return element, otherwise will throw error. 
- By all returns an array if more than one match. 

### [JavaScript Require vs Import](https://blog.bitsrc.io/javascript-require-vs-import-47827a361b77)
- Both refer to JS dependencies
- Require is typically used with NodeJS to read/execute CommonJS modules. 
- Import was introduced in ES6, and we cannot use it outside of ES modules. 
- Require statements can be called anywhere in the code, Import MUST be at the beginning
- Require can be called conditionally, ie ```if(articleCount>0){
   const getBlogTitle = require(‘./blogDetails.js’);
}```
- Require statements are treated as functions which are called at run time, while import statements are static and cannot be used conditionally or dynamically. 
- Import statements are asynchronous. If you use require, modules will be loaded and processed one by one. Import performs well compared to require in large scale applications. 
- ES modules are the future, but many NodeJS modules and libraries are written with CommonJS so you can't just NOT use require. 


