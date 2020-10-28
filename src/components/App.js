import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevItem => {
      return[...prevItem, newNote]
    })
  }
  function deleteNote(id) {
    setNotes(prevItems => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          deleteNote={deleteNote}
        />
      })}  
      <Footer />
    </div>
  );
}

export default App;
