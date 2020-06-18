import React, { Component } from "react";
import SideDirectory from './directory/Directory'
import RichEditor from './editor/RichEditor'
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="home-container">
        <div className="home-side">
          <SideDirectory></SideDirectory>
        </div>
        <div className="home-content">
          <RichEditor />
        </div>
      </div>
    );
  }

}

export default Home;
