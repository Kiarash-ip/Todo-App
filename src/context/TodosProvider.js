import React, { createContext, useReducer } from "react";

export const todosContext = createContext();

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-TODO":
      if (state.todos.find((todo) => todo.text === action.payload))
        return state;
      let newTodo = { text: action.payload, id: action.payload };
      return {
        todos: [...state.todos, newTodo],
      };
    case "DELETE-TODO":
      let filteredTodos = state.todos.filter(
        (todo) => todo.text !== action.payload
      );
      return {
        todos: [...filteredTodos],
      };
    default:
      return state;
  }
};

export default function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <todosContext.Provider value={{ state, dispatch }}>
      {children}
    </todosContext.Provider>
  );
}
