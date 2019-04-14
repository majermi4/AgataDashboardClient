import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu'
import Navbar from "./Components/Navbar/Navbar";
//import { applyGlobalCss} from "./GlobalCss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SidebarMenuConfig from './SidebarMenuConfig'

// applyGlobalCss();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="leftColumn">
          <SidebarMenu sidebarMenuConfig={SidebarMenuConfig} />
        </div>
        <div className="rightColumn">
          <Navbar />
          <Route path="/home" component={Index} />
          <Route path="/features/" />
            <Route path="/features/feature1" component={About} />
            <Route path="/features/feature2" component={About} />
            <Route path="/features/feature3" component={About} />
          <Route path="/settings/" component={Settings} />
            <Route path="/settings/settings1" component={Settings1} />
            <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

function Index() {
    return <h2>index</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Settings1() {
    return <h2>Settings 1</h2>;
}

function Settings() {
    return <h2>Settings</h2>;
}
function Users() {
    return <h2>Users</h2>;
}

export default App;
