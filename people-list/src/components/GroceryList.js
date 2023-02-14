import React, { useState, useEffect } from "react";
import List from "./List";

function GroceryList() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    console.log(specificItem);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };
  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id != id);
    console.log(newList);
    setList(newList);
  };

  const clearItems = () => {
    setList([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //do editing stuff

      list.map((item) => {
        if (item.id === editId) item.title = name;
      });
      console.log(list);
      setList(list);
      setName("");
      setIsEditing(false);
      setEditId(null);
    } else {
      console.log("here");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} editItem={editItem} deleteItem={deleteItem} />
          <button className="clear-btn" onClick={clearItems}>
            clear items
          </button>
        </div>
      )}
    </section>
    // <div>
    //   <div>GroceryList</div>
    //   <form onSubmit={handleSubmit}>
    //     <input value={name} onChange={(e) => setName(e.target.value)}></input>
    //     <button>Add To list</button>
    //   </form>

    //   <List list={list}></List>
    //   <div>
    //     <button>Clear Items</button>
    //   </div>
    // </div>
  );
}

export default GroceryList;
