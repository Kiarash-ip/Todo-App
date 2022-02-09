import React, { useContext, useState } from "react";
import { todosContext } from "../context/TodosProvider";

export default function Todo({ text }) {
  const { dispatch } = useContext(todosContext);
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <p>{completed ? <del>{text}</del> : text}</p>
      {!completed && (
        <button onClick={() => setCompleted(true)}>Completed</button>
      )}
      <button onClick={() => dispatch({ type: "DELETE-TODO", payload: text })}>
        Delete
      </button>
    </div>
  );
}
