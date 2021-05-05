import React, { Component } from "react"
import SidebarWrapper from "./Components/SideBar/SidebarWrapper";
import Main from "./Components/Main/Main.js";
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import SigninWrapper from "./Components/Signin/SigninWrapper";
import "./App.css"

class App extends Component {

  render() {
    return (
      <div className = "app">
          <HeaderWrapper/>
          <SidebarWrapper/>
          <SigninWrapper/>
          <Main/>
      </div>
    );
  }

}

export default App;
