// For using react from the node_modules
import React from "react";
import  ReactDOM from "react-dom/client";



// Q--> CREATING A BASIC h1 tag using REACT ELEMENT

// const heading = React.createElement("h1",{},"Hello World in React");

const root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(heading);


    // Q--> TRY TO CREATE  NESTED ELEMENTS LIKE THE GIVEN BELOW

/* <div id="parent">
        <div id="child1">
            <h1>This is a h1 tag</h1>
            <h2>This is a h2 tag</h2>
        </div>
        <div id="child2">
            <h1>This is a h1 tag</h1>
            <h2>This is a h2 tag</h2>
        </div>
</div> */

const parent = React.createElement(
    "div",
    {id: "Parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"This is a h1 tag"),
        React.createElement("h2",{},"This is a h2 tag")]
    ),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"This will change automatically due to parcel"),
    React.createElement("h2",{},"Above thing is called HMR(Hot Module Replacement)")])
    ] 
    );

root.render(parent);
console.log(parent);        // It will return a object

// NOTE --> parent here is not a html element it is an object which will behave like a
//          html element by the browser
