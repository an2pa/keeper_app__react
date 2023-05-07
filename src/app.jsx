import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(todo) {
    setItems((prevVal) => {
      return [...prevVal, todo];
    });
  }

  function deleteItem(id) {
    setItems((prevVal) => {
      return prevVal.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Note
              key={index}
              id={index}
              title={todoItem.title}
              content={todoItem.content}
              delete={deleteItem}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
