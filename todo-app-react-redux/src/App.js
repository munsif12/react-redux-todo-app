import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { addItem } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState("");
  return (
    <div className="App">
      <h1>React Redux Todo App</h1>
      <div className="input">
        <input
          type="text"
          name="item"
          id="text"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
        />
        <button onClick={() => dispatch(addItem(listItem))}>+</button>
      </div>
    </div>
  );
}

export default App;
