// ECMAScript modules
// - uses the import keyword instead of a require() function
// import X from 'X'
import React from 'react'; // used implicitly for parsing the JSX

// a component in React must contain a render method
// - function components have a different representation
//   for the render method, it is the JSX that we return
//   from the function
function DateDisplay() {

    const date = new Date().toLocaleDateString();

    // a JSX return that isn't surrounded by parenthesis must have
    // the opening element on the same line as the return keyword.
    // - we can interpolate data into the JSX using expressions
    //   wrapped in curly braces
    // - statements can not be interpolated
    return <p>Date: {date}</p>
}

// export the component
// - export default signifies the file/module represents the component
export default DateDisplay;

// export a function to be destructured in another file
export const doSomething = () => {
    console.log("Doing something");
}