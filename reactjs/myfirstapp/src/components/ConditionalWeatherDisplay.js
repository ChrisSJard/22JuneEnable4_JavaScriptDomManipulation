import React from "react";

function ConditionalWeatherDisplay() {

    let temperature = 8; // centigrade

    // we can create CSS styles in our JavaScript
    // - instead of hyphens/dashes separating the property names,
    //   we use the JS camelCase convention
    const danger = {
        backgroundColor: "red"
    }

    const safe = {
        backgroundColor: "green"
    }

    function renderWarning() {
        // one form of conditional rendering is to put if statements,
        // or other control flow logic, inside of a function
        // - a function is an expression when called, so it can
        //   be used inside of JSX
        if (temperature >= 40) {
            // we pass the CSS style object using curly braces
            // - an object is a form of expression which evaluates
            //   to itself
            return <p style={danger}>Dangerously hot temperatures today.</p>
        } else if (temperature < 8) {
            return <p style={danger}>Dangerously cold temperatures today.</p>
        }
    }

    return (
        <div>
            <h1>Weather forecast</h1>
            <p>{temperature} C</p>
            {renderWarning()}

            {/* ternary expression for conditional rendering
                - ternaries are best when you have a condition upon which only one of two
                  things may render
            */}
            {temperature >= 40 ? <p style={danger}>Dangerously hot temperatures today.</p> : <></>}
            {temperature < 8 ? <p style={danger}>Dangerously cold temperatures today.</p> : <></>}

            {/* we can use shortcircuit operators && for conditional rendering */}
            {temperature < 40 && temperature >= 8 && <p style={safe}>No weather warnings in place</p>}
        </div>
    );
}

export default ConditionalWeatherDisplay;