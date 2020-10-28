import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [ newNote, setNewNote ] = useState({title: "", content: ""});
  const [activated, setActivated] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target
    setNewNote(prevValue => {
      return {
        ...prevValue,
        [name]:value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote({title: "", content: ""})
    event.preventDefault();
  }

  function handleClick() {
    activated === false&& setActivated(true);
  }

  return (
    <div>
      <form className="create-note">
        <input 
          onClick={handleClick}
          onChange={handleChange} 
          value={newNote.title} 
          autocomplete="off"
          name="title" 
          placeholder="Title" 
        />
        {activated === true&& 
          <textarea 
          onChange={handleChange} 
          value={newNote.content} 
          name="content" 
          placeholder="Take a note..." 
          rows="4" 
        />
        }
        
        <Zoom in={activated}>
        <Fab onClick={submitNote
          }>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
