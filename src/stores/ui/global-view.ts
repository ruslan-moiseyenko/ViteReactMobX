import { autorun } from "mobx";
import { RootStore } from "../root-store";

export class GlobalView {
  constructor(rootStore: RootStore) {
    autorun(() => {
      console.log(
        "We have that much users now:",
        rootStore.dataStore.usersStore.userList.length
      );
    });
  }
}
