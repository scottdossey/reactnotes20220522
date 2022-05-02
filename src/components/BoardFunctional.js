//There are two ways to implement a component.

//There are what we call "Class based comoponents"
//There are "functional" components that are implemented by declaring a function.

//OLD school REACT always use class based componets, ES6 style classes.

//But modern REACT is often written using the functional style..
//The slides that we are using use the old school class component
//method..but it is critical that I teach the functional style
//because that is the PREFERRED style going forward.

import React from 'react';
import "../css/Board.css";
import Note from './NoteFunctional';

function Board(props) {
    /* We need to add state to board to hold the notes. */
    let [notes, setNotes] = React.useState([]);

    function addNote() {                
        //Make a copy of notes so we don't modify
        //notes directly.
        let newNoteArray= [];
        for(let i=0; i<notes.length; ++i) {
            newNoteArray.push(notes[i]);         
        }
        newNoteArray.push(
          {
            id: Date.now() //Quick and dirty unique id
          }
        );
        setNotes(newNoteArray);          
    }

    function deleteNote(id) {        
        let newNoteArray = []
        for(let i=0; i<notes.length; ++i) {
            if(notes[i].id !== id) {
               newNoteArray.push(notes[i]);
            }
        }
        setNotes(newNoteArray);
    }

    console.log(notes);
    return (
        <div>        
        <div className="div-board">
          <div className="row">
            {notes.map(
              note=>{
                   return (<Note key={note.id} id={note.id} 
                            deleteHandler={deleteNote}/>
                   );
              }              
            )}                                          
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={addNote}>Add</button>
        </div>
      </div>
    );
}

export default Board;
