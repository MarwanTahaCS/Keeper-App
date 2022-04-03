import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [clicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClicked() {
    setClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {clicked && (
          <Zoom in={clicked}>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          </Zoom>
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClicked}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked ? 3 : 1}
        />
        <div onClick> </div>
        {clicked && (
          <Zoom in={clicked}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
