import { RootStore } from "../root-store";
import { TodoStore } from "./todo/todo-store";
import { UserStore } from "./users/user-store";

export class DataStore {
  todoStore: TodoStore;
  usersStore: UserStore;

  constructor(rootStore: RootStore) {
    this.todoStore = new TodoStore(rootStore);
    this.usersStore = new UserStore(rootStore);
  }
}
