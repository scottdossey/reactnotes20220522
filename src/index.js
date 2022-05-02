import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/BoardFunctional';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <React.StrictMode>
      <Board />
    </React.StrictMode>    
);

/* JSX and HTML are difference */
/* 1. each JSX "HTML"-like element must include
 *   a top level parent element
 *  You can use an HTML fragment (<></>)
 *   
 * 2. All tags can self close... and MUST be closed.
 *     <br><br/>
 *     <br/>
 *     
 *     <div/> = <div></div>
 * 
 *     <img></img>
 * 
 *   3. We have ty replace certain names in 
 *      our JSX style HTML.
 * 
 *      SPecifically "class" and "for" are two names
 *      we use in HTML a lot that also happen to be javascript
 *      "reserved words" so we replace "class" with
 *      "className" and "for" with "htmlFor"
 * 
 *     <div class="container">
 *        becomes
 *     <div className="container">
 * 
 *  4. Cerrtain HTML even tname and attributes names are 
 *     changed..they are changed to camel case.
 *       onclick, onmouseover.....
 * 
 *       become onClick, onMouseOver -- you also
 *      end up passing event a function reference rather
 *     than a javascript string.
 * 
 *  5. inline styles are done using Javascript objects
 *     <p style="color: #2ecc71; fontsize: 26px">
 *        becomes
 * 
 *     const inlineStyle = {
 *          color: "#2ecc71",
 *          fontSize: "25px"
 *     };
 *     
 *     <p style={inlineStyle}>
 * 
 *  6. We can substitute in javascript expressions into our JSX
 *    style HTML by using "token replacement"..That is
 *    we can curly brace  in out JSX html and put 
 *    a javascript expression in them.
 * 
 *    <p>{variableHere}</p>
 * 
 *  Everything in React is a component. We can create
 *  components two ways. Way 1 is using ES6 classes
 *  (old way), way 2 is to create functional components.
 *  --We will demonstrate both of these.
 */ 


