import { RootStore } from "./../../root-store";
import { computed, makeObservable, observable } from "mobx";

let runningId = 0;

export class User {
  id: number = runningId++;

  @observable
  name: string = "";

  private readonly rootStore: RootStore;

  constructor(name: string, rootStore: RootStore) {
    this.name = name;
    this.rootStore = rootStore;

    makeObservable(this);

    rootStore.dataStore.todoStore.addTodo(
      "That is your first task: delete that task",
      this.id
    );
  }

  @computed
  get todos() {
    return this.rootStore.dataStore.todoStore.getUserTodos(this.id);
  }
}
