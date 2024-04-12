import { autorun, observable } from "mobx";
import { RootStore } from "../root-store";

export class GlobalView {
  @observable
  themeColor = "blue";

  constructor(rootStore: RootStore) {
    autorun(() => {
      console.log("List Length:", rootStore.dataStore.todoStore.list.length);
      console.log("themeColor:", this.themeColor);
    });
  }
}
