import React, { useContext } from "react";
import { todosContext } from "../context/TodosProvider";
import Todo from "./Todo";

export default function TodoList() {
  const { state } = useContext(todosContext);

  return (
    <div className="todoList__container">
      {state?.todos.map((todo) => (
        <Todo key={todo.id} text={todo.text} />
      ))}
    </div>
  );
}
