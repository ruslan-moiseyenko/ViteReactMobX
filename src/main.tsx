import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createStore } from "./stores/helpers/create-store.ts";
import { StoreProvider } from "./stores/helpers/store-context.ts";

const rootStore = createStore();

// Add some users to the store
rootStore.dataStore.usersStore.addUser("Kevin Doe");
rootStore.dataStore.usersStore.addUser("Michel Doe Jr.");
rootStore.dataStore.usersStore.addUser("Daniel Doe");
rootStore.dataStore.usersStore.addUser("John Doe III");

// find a user
const newUser = rootStore.dataStore.usersStore.getUser("Kevin Doe");

// add todos
rootStore.dataStore.todoStore.addTodo("Learn React", newUser.id);
rootStore.dataStore.todoStore.addTodo("Learn TypeScript", newUser.id);

// remove User
rootStore.dataStore.usersStore.removeUser("Kevin Doe");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
