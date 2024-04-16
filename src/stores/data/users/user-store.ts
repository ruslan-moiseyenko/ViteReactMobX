import { action, makeObservable, observable } from "mobx";
import { RootStore } from "../../root-store";
import { User } from "./user";

export class UserStore {
  @observable
  userList: User[] = [];

  private readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  getUser(name: string) {
    return this.userList.find((user) => user.name === name) as User;
  }

  @action
  addUser(name: string) {
    this.userList.push(new User(name, this.rootStore));
  }

  @action
  removeUser(name: string) {
    const user = this.getUser(name);
    if (!user) {
      return;
    }

    user.todos.forEach((todo) => todo.remove());
    const userIndexToRemove = this.userList.indexOf(user);
    this.userList.splice(userIndexToRemove, 1);
  }
}
