import { action, makeObservable, observable, reaction } from "mobx";
import { TodoStore } from "./todo-store";

let initialId = 0;

export class Todo {
  @observable
  id: number = initialId++;

  @observable
  userId: number;

  @observable
  name: string = "";

  @observable
  isCompleted: boolean = false;

  private todoStore: TodoStore;
  private disposer: () => void;

  constructor(name: string, userId: number, todoStore: TodoStore) {
    this.name = name;
    this.userId = userId;
    this.todoStore = todoStore;

    makeObservable(this);

    this.disposer = reaction(
      () => this.isCompleted,
      () => {
        console.log(`Todo ${this.id} is currently ${this.isCompleted}`);
      }
    );
  }

  remove(): void {
    this.todoStore.removeTodo(this.name);
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
