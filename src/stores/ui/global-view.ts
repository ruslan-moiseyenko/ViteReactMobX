import { action, makeObservable, observable } from "mobx";
import { RootStore } from "../root-store";

export enum Views {
  Todos = "Todos",
  Users = "Users"
}

export class GlobalView {
  private rootStore: RootStore;

  @observable
  currentView: Views = Views.Todos;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  updateView(view: Views) {
    this.currentView = view;
  }
}
