import { FC, memo, useState } from "react";
import { Todo } from "../../stores/data/todo/todo";
import "./styles.css";

type TodoProps = {
  todo: Todo;
};

export const TodoComponent: FC<TodoProps> = memo(({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo?.name);

  const saveTodo = () => {
    if (!text.trim().length) return;
    todo.setName(text);
    setIsEditing(false);
    setText("");
  };

  const todoName = isEditing ? (
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  ) : (
    <p>Todo: {todo.name}</p>
  );

  const editButton = isEditing ? (
    <button onClick={saveTodo}>Save</button>
  ) : (
    <button onClick={() => setIsEditing(true)}>Edit</button>
  );

  const toggleTodoButton = isEditing ? null : (
    <button onClick={() => todo.toggleCompleted()}>
      {todo.isCompleted ? "Undone" : "Done"}
    </button>
  );

  return (
    <div className={`todo-wrapper ${todo.isCompleted ? "done" : null}`}>
      <p>User ID: {todo.userId}</p>
      {todoName}
      <div>
        <button onClick={() => todo.remove()}>Delete</button>
        {editButton}
      </div>
      {toggleTodoButton}
    </div>
  );
});
