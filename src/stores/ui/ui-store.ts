import { makeObservable } from "mobx";
import { RootStore } from "../root-store";
import { GlobalView } from "./global-view";

export class UiStore {
  globalView: GlobalView;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.globalView = new GlobalView(rootStore);
  }
}
