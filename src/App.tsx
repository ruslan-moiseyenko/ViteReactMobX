import { useState } from "react";
import "./App.css";
import { TodoComponent } from "./components/Todo/Todo";
import { useStore } from "./stores/helpers/useStore";

function App() {
  const [count, setCount] = useState(0);
  const {
    dataStore: { todoStore }
  } = useStore();

  return (
    <>
      <TodoComponent />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {todoStore.todos.map((todo) => (
          <div key={`${Date()}${todo.id}`}> {todo.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
