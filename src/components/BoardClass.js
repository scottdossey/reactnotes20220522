import React, {Component} from 'react';
import '../css/Board.css';
import Note from './NoteClass';

class Board extends Component {
    constructor() {
        super(); 
        this.state = {
          notes: []
        }
    }

    addNote() {
      let notes = this.state.notes;
      /* And now we are going to push a new note into our state */
      notes.push(
        {
          id: Date.now() //Quick and dirty unique id
        }
      );
      /* Anytime we update state with a class based React component
       * we need to this.setState
       */
      this.setState(
        {
          notes: this.state.notes
        }
      )
    }

    deleteNote(id) {
      let oldNoteArray = this.state.notes;
      let newNoteArray = []
      for(let i=0; i<oldNoteArray.length; ++i) {
          if(oldNoteArray[i].id !== id) {
             newNoteArray.push(oldNoteArray[i]);
          }
      }
      this.setState(
        {
          notes: newNoteArray
        }
      );
    }

    render() {        
        return (
              <div>        
                <div className="div-board">
                  <div className="row">
                    {this.state.notes.map(
                      note=>{
                           return (<Note key={note.id} id={note.id} 
                                    deleteHandler={this.deleteNote.bind(this)}/>
                           );
                      }
                    )}                    
                  </div>
                </div>
                <div>
                  <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
                </div>
              </div>
            );
    }

}

export default Board;