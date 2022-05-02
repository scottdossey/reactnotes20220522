//There are two ways to implement a component.

//There are what we call "Class based comoponents"
//There are "functional" components that are implemented by declaring a function.

//OLD school REACT always use class based componets, ES6 style classes.

//But modern REACT is often written using the functional style..
//The slides that we are using use the old school class component
//method..but it is critical that I teach the functional style
//because that is the PREFERRED style going forward.

import "../css/Board.css";
import Note from './Note';

function Board() {
    let x = [1,2,3,4,5];
    return (
        <div>
            <div className="div-board">
                <div className="row">  
                    <Note title="Class Notes" body="Always use constructors when extending another class"/>
                    <Note title="My New Address" body="2001 N Lonhill Phoenix, AZ 81234"/>
                    <Note title="React Notes" body="Everything in React is a component"/>                  
                    <Note title={x}/>
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button">Add</button>
            </div>
        </div>
    );
}

export default Board;
