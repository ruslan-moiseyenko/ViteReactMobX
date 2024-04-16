import { action, computed, makeObservable, observable, when } from "mobx";
import { RootStore } from "../../root-store";
import { Todo } from "./todo";

export class TodoStore {
  @observable
  todos: Todo[] = [];

  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this);

    when(
      () =>
        this.todos.length > 0 && this.todos.length === this.completed.length,
      () => {
        console.log("All todos are completed!");
      }
    );
  }

  @action
  addTodo(name: string, userId: number) {
    this.todos.push(new Todo(name, userId, this));
  }

  @action
  removeTodo(name: string) {
    const todoToRemove = this.todos!.find((todo) => todo.name === name);

    if (todoToRemove) {
      todoToRemove.dispose();
      this.todos.splice(this.todos.indexOf(todoToRemove), 1);
    }
  }

  // @action
  getUserTodos(userId: number) {
    return this.todos.filter((todo) => todo.userId === userId);
  }

  @computed
  get completed() {
    return this.todos.filter((todo) => todo.isCompleted);
  }

  @computed
  get incomplete() {
    return this.todos.filter((todo) => !todo.isCompleted);
  }
}
