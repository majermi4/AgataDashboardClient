import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu'
import Button from './Components/Buttons/Button';
import Navbar from "./Components/Navbar/Navbar";
import { applyGlobalCss} from "./GlobalCss";

// applyGlobalCss();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SidebarMenu />
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>
            {/*Touch <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<Button label={"Learn react"} />*/}
        {/*</header>*/}
      </div>
    );
  }
}

export default App;
