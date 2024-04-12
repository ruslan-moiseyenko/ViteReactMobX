import {
  action,
  computed,
  makeObservable,
  observable,
  reaction,
  when
} from "mobx";

let initialId = 0;

class Todo {
  @observable
  id: number = initialId++;

  @observable
  name: string = "";

  @observable
  isCompleted: boolean = false;

  private disposer: () => void;

  constructor(name: string) {
    this.name = name;
    makeObservable(this);

    this.disposer = reaction(
      () => this.isCompleted,
      () => {
        console.log(`Todo ${this.id} is currently ${this.isCompleted}`);
      }
    );
  }

  @action
  setName(name: string) {
    this.name = name;
  }

  @action
  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  dispose() {
    this.disposer();
  }
}

class TodoList {
  @observable
  todos: Todo[] = [];

  constructor() {
    makeObservable(this);
    reaction(
      () => this.todos.length,
      () => {
        console.log(
          `Totally:${this.todos.length}, completed: ${this.completed.length}, incomplete: ${this.incomplete.length}`
        );
      }
    );

    when(
      () =>
        this.todos.length > 0 && this.todos.length === this.completed.length,
      () => {
        console.log("All todos are completed!");
      }
    );
  }

  @action
  addTodo(name: string) {
    this.todos.push(new Todo(name));
  }

  @action
  removeTodo(name: string) {
    const todoToRemove = this.todos!.find((todo) => todo.name === name);

    if (todoToRemove) {
      todoToRemove.dispose();
      this.todos.splice(this.todos.indexOf(todoToRemove), 1);
    }
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

export { Todo, TodoList };
