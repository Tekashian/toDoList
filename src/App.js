import React, { useState } from "react";
import Input from "./components/Input";
import Item from "./components/Item"

function App() {

  const [items, setItems] = useState([]);

  function handleAdd(inputText) {
    console.log("click")

    setItems(prevValues => {
      return [...prevValues, inputText]
    })
    console.log(items)

  }

  function deleteItem (id) { 
    setItems(prevValues => { 
      return prevValues.filter((item, index) => { 
        return index !== id
      })
    })

  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onAdd={handleAdd} />
      <div>
        {items.map((toDoItem, index) => (
          <Item
            key={index}
            id={index}
            text={toDoItem}
            handleDelete = {deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
