import React from "react";
import logo from "../../logo.svg";
import { AppRoot } from "./App.styles";
import Table from "../Table/Table";
import "./App.css";
import store from "../../redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    // <AppRoot>
    //   <Table />
    // </AppRoot>
    <AppRoot>
      <Provider store={store}>
        <Table />
      </Provider>
    </AppRoot>
  );
};

export default App;
