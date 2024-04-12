import { RootStore } from "../root-store";
import { GlobalView } from "./gloval-view";

export class UiStore {
  globalView: GlobalView;

  constructor(rootStore: RootStore) {
    this.globalView = new GlobalView(rootStore);
  }
}
