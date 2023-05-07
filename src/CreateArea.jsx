import React, { useState } from "react";

function CreateArea(props) {
  const [todo, setToDo] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setToDo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(todo);
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
