# Component Based UI

## Lab Requirements

Students will be creating and styling a Counter application. Look for the following attributes

- `Header`, `Footer`, and `Counter` components to separate files
- Properly `export` them as defaults
- Import them into the `App` Component using ES6 `import` statement
- Proper state management
- Button Handlers
  - Bonus if they can wire both buttons with one handler

### Grading Standards & Notes

- Features
  - As noted
- Code Quality
  - Looking for proper class syntax.
  - Good file naming and folder structure.
  - Styles well written, using SASS variables/nesting and thought through beyond simple colors.
- Testing
  - Not Required
- Deployment
  - Code Sandbox only.
- Documentation
  - Quality README

### Lab Assistance Notes

- The first and most important part of the lab assignment is to draw a process diagram of the starter code and state as events happen. Once the students understand that, they can move on.
# RESTy

### Testing Library
![ReactTestingQueryTable](/img/ReactTestingQueryTable.PNG)
- getBy will return the matching node for the query, throws error if no match
- queryBy will return matching node for query, null if no match. Useful for asserting that an element is NOT present. 
- FindBy returns a promise which will resolve when an element is found which matches the query. has 1000ms to return element, otherwise will throw error. 
- By all returns an array if more than one match. 

