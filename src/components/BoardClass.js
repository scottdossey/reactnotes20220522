import React, {Component} from 'react';
import '../css/Board.css';

class Board extends Component {
    constructor() {
        super();
    }

    render() {
        return (
              <div>
                <div className="div-board">
                  <div className="row">
                  </div>
                </div>
                <div>
                  <button className="btn btn-success add-button">Add</button>
                </div>
              </div>
            );
    }

}

export default Board;