import React from 'react';
import PropTypes from 'prop-types';
import '../css/Note.css';

const GENERIC_NOTE_TITLE = "New Note Title";
const GENERIC_NOTE_BODY = "New Note Body";

function Note(props) {
    let [title, setTitle] = React.useState(GENERIC_NOTE_TITLE);
    let [body, setBody] = React.useState(GENERIC_NOTE_BODY);
    let [editMode, setEditMode] = React.useState(false);

    let titleContent = React.createRef();
    let bodyContent = React.createRef();

    function handleEdit() {
        setEditMode(true);        
    }

    function handleSave() {
        setTitle(titleContent.current.value);
        setBody(bodyContent.current.value);
        setEditMode(false);
    }

    function handleDelete() {
        props.deleteHandler(props.id);
    }

    let titleElement, bodyElement, buttonArea;
        
    if(editMode) {
        titleElement = (
            <textArea ref={titleContent} className="title-textarea">
                {title}
            </textArea>
        );
        bodyElement = (
            <textArea ref={bodyContent} className="body-textarea">
                {body}
            </textArea>
        );
        buttonArea = (
            <div>
                <button className="btn btn-primary" 
                        onClick={handleSave}>
                    Save
                </button>
            </div>
        );
    } else {
        titleElement = <h5 className="card-title">{title}</h5>;
        bodyElement = <p>{body}</p>;
        buttonArea = (
            <div>
                <button className="btn btn-info" onClick={handleEdit}>Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        );            
    }
    return (
        <div className="col-sm-6">
            <div className="card card-view">
                <div className="card-body">
                    {titleElement}
                    {bodyElement} 
                    {buttonArea}                       
                </div>
            </div>
        </div>
    );    
}

Note.defaultProps = {
    title: "A cool title",
    body: "A cool body"
}

Note.propTypes = {
    title: PropTypes.string
}

export default Note;