import React from 'react';
import './OpenNote.css'



export default function OpenNote(props) {

    const note = props.notes.find(note => note.id === props.match.params.openNoteId);
    
    return (
        <div>
            <h2>Notes</h2>
            <div className='open-view'>
                <h3>{note.name}</h3>
                {note.modified}       
                <button className='delete-button'>Delete Note</button>
                <p className='content'>{note.content}</p>
            </div> 
                 
        </div>
                       
        
    );
}