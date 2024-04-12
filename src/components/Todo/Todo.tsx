import { TodoList } from "../../stores/todo";

export const TodoComponent = () => {
  const todoList = new TodoList();
  todoList.addTodo("Learn MobX");
  todoList.addTodo("Build a Todo List");
  todoList.addTodo("Profit!");
  todoList.removeTodo("Build a Todo List");
  return <div>Todo</div>;
};
