import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/helpers/useStore";
import { Views } from "../../stores/ui/global-view";
import "./styles.css";

export const ViewsSwitcher = observer(() => {
  const {
    uiStore: { globalView }
  } = useStore();

  const getCurrentView = () => {
    if (globalView.currentView === Views.Todos) {
      return <div>Todo Tab</div>;
    } else if (globalView.currentView === Views.Users) {
      return <div>Users Tab</div>;
    }
    return null;
  };

  return (
    <div>
      <p>Views Switcher</p>
      <nav className="nav">
        <div className="button">
          <span>
            <a
              className={`nav-link  ${
                globalView.currentView === Views.Todos && "active-tab"
              }`}
              href="#"
              onClick={() => globalView.updateView(Views.Todos)}
            >
              Todos View
            </a>
          </span>
        </div>
        <div className="button">
          <span>
            <a
              className={`nav-link  ${
                globalView.currentView === Views.Users && "active-tab"
              }`}
              href="#"
              onClick={() => globalView.updateView(Views.Users)}
            >
              User View
            </a>
          </span>
        </div>
      </nav>
      {getCurrentView()}
    </div>
  );
});
