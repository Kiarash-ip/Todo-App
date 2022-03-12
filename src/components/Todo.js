import React, { useContext, useState } from "react";
import { todosContext } from "../context/TodosProvider";
import PropTypes from "prop-types";

export default function Todo({ text }) {
  const { dispatch } = useContext(todosContext);
  const [completed, setCompleted] = useState(false);

  return (
    <div className="todoItem__container">
      <div className="todoItem__text">
        <p>{completed ? <del>{text}</del> : text}</p>
      </div>
      <div>
        {!completed && (
          <button
            className="compeleted__button"
            onClick={() => setCompleted(true)}
          >
            Completed
          </button>
        )}
        <button
          className="delete__button"
          onClick={() => dispatch({ type: "DELETE-TODO", payload: text })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
};
