import React from "react";
import { render } from "react-dom";

import "./../scss/main.scss";

import User from "./components/User.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <User />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
