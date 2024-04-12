import { observable } from "mobx";
import { RootStore } from "../root-store";

class Todo {}

export class TodoStore {
  @observable
  list: Todo[] = [];

  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
