import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodosProvider from "./context/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </TodosProvider>
  );
}

export default App;
