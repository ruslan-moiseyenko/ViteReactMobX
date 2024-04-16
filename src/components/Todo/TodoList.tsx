import { useState } from "react";
import { useStore } from "../../stores/helpers/useStore";
import { TodoComponent } from "./TodoComponent";
import { observer } from "mobx-react-lite";

export const TodoList = observer(() => {
  const [textValue, setTextValue] = useState("");
  const {
    dataStore: { todoStore }
  } = useStore();

  const addTodo = () => {
    if (!textValue.trim().length) return;

    //999 - is a fake UserId
    todoStore.addTodo(textValue, 999);
    setTextValue("");
  };

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          className="text-input"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <input
          type="button"
          className="input-button"
          value={"Add Todo"}
          onClick={addTodo}
        />
      </div>
      <h2>Incomplete todos:</h2>
      <div>
        {todoStore.incomplete.map((todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
      </div>
      <h2>Completed todos:</h2>
      <div>
        {todoStore.completed.map((todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
});
