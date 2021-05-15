import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addItem, deleteItem } from "./redux/actions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function App() {
  const data = useSelector((state) => state.all_Reducers.list); //redux GUI ma jakr check kr flow //ya line arrayOfobject return kry ge jima sary lists pary hongy [{id:0,data;"sdsd"},{id:1,data:"dfdf"}] istrah
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
        <button
          onClick={() => {
            dispatch(addItem(listItem));
            setListItem(" ");
          }}
        >
          +
        </button>
      </div>
      <div className="allLists">
        <div className="allItmes_wrapper">
          <ul>
            {data.map((val, index) => {
              //displaying all the lists with map
              return (
                <div className={`listWrapper${index + 1} listWrapper`}>
                  <li className={`item${index + 1} item`}>
                    <div className="item">
                      {" "}
                      <p>{val.data}</p>{" "}
                    </div>
                    <DeleteForeverIcon
                      style={{
                        cursor: "pointer",
                        color: "red",
                        transform: "scale(0.8)",
                      }}
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
