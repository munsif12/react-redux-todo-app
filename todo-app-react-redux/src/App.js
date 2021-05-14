import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addItem, deleteItem } from "./redux/actions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function App() {
  const data = useSelector((state) => state.all_Reducers.list);
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
      <div className="allLists">
        <div className="allItmes_wrapper">
          <ul>
            {data.map((val, index) => {
              return (
                <div className="listWrapper">
                  <li className={`item${index}`}>
                    <div className="item">
                      {val.data} {index}
                    </div>
                    <DeleteForeverIcon
                      onClick={() => dispatch(deleteItem(val.id))}
                    />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
