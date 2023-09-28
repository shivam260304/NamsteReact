// For using react from the node_modules
import React from "react";
import  ReactDOM from "react-dom/client";



// Q--> CREATING A BASIC h1 tag using REACT ELEMENT

// const heading = React.createElement("h1",{},"Hello World in React");

// const root = ReactDOM.createRoot(document.getElementById("container"));
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

// const parent = React.createElement(
//     "div",
//     {id: "Parent"},
//     [React.createElement(
//         "div",
//         {id:"child1"},
//         [React.createElement("h1",{},"This is a h1 tag"),
//         React.createElement("h2",{},"This is a h2 tag")]
//     ),
//     React.createElement("div",{id:"child2"},
//     [React.createElement("h1",{},"This will change automatically due to parcel"),
//     React.createElement("h2",{},"Above thing is called HMR(Hot Module Replacement)")])
//     ] 
//     );

// root.render(parent);
// console.log(parent);        // It will return a object

// NOTE --> parent here is not a html element it is an object which will behave like a
//          html element by the browser

// When we render it to the dom then the object becomes a html element
// ---------------------------------------------------------------------------------------
// JSX

// JSX (transpiled before it reaches to js Engine) - Parcel - babel
// BABEL transpiles it to -> React.createElement -> React element = js Object -> HTMLElement(render)

// Normal React element
const jsxheading = (<h1 className="heading1">
    This is Namaste React ep3</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);
// console.log(jsxheading);

// ---------------------------------------------------------------------------------------

//   REACT COMPONENTS
// 1) Class based components (OLD)
// 2) Function based components (NEW)
// ---------------------------------------------------------------------------------------

// FUNCTIONAL COMPONENETS --> (a normal js function return a jsx)

const Title = () =>(
    <h1>Hello Everybody</h1>
);

// root.render(Title);       It will not wor cause it's not a react element

// root.render(<Title/>);
// console.log(Title);
// --------------------------------------------------------------------------------------

// MERGING TWO REACT COMPONENTS  (COMPONENT COMPOSITION)

const HeadingComponent = () =>(
    <div>
         {/*We can write any js argument in this curly braces */}
        {/* {Title()} */}
        {/* {<Title></Title>} */}
        <Title/>       {/*These above 3 ways are for component composition*/}
        <h1 className="header">Namaste React Functional Component</h1>
    </div>
);


root.render(<HeadingComponent/>);


