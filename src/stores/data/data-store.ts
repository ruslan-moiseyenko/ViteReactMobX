import { RootStore } from "../root-store";
import { UiStore } from "../ui/ui-store";
import { TodoStore } from "./todo-store";

export class DataStore {
  todoStore: TodoStore;
  uiStore: UiStore;

  constructor(rootStore: RootStore) {
    this.todoStore = new TodoStore(rootStore);
    this.uiStore = new UiStore(rootStore);
  }
}
