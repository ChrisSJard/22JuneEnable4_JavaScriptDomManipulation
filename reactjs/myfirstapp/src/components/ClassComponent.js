import React, { Component } from "react";

class ClassComponent extends Component {

    // props is data passed in
    constructor(props) {
        super();
    }

    // all class components must have a render method at a minimum
    render() {
        // A React fragment allows us to insert content into the 
        // DOM
        // - it allows for multiple JSX elements to be inserted
        //   at the parents level rather than nested
        return <>
            <p>This is a class component.</p>
            <p>ANother paragraph.</p>
        </>
    }
}

export default ClassComponent;