import React from "react";

export default function NoJSX() {
    // No JSX version of the component
    /* return React.createElement('h3',null, 'Hello React App'); */
    // JSX version of the component
    return (
        <div>
            <h3>Hello React App</h3>
        </div>
    );
}