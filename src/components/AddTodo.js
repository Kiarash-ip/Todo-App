import React, { useState, useContext } from "react";
import { todosContext } from "../context/TodosProvider";

export default function AddTodo() {
  const [state, setState] = useState("");
  const { dispatch } = useContext(todosContext);

  const addTodokHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD-TODO", payload: state });
    setState("");
  };

  return (
    <div>
      <div className="addTodo__input--Container">
        <form onSubmit={addTodokHandler}>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </form>
        <button disabled={state ? false : true} onClick={addTodokHandler}>
          Add todo
        </button>
      </div>
    </div>
  );
}
