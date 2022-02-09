import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodosProvider from "./context/TodosProvider";
import "./scss/styles.scss";

function App() {
  return (
    <TodosProvider>
      <div className="App">
        <div className="todoApp-container">
          <h1>Todo App</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
}

export default App;
