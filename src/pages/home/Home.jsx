import React, { Component } from "react";
import { Layout, Button } from "antd";
import { CSSTransition } from 'react-transition-group'
import "./Home.css";

const { Sider, Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLevel2: false,
    };
    this.toggleShowLevel2 = this.toggleShowLevel2.bind(this);
  }
  render() {
    return (
      <div className="home-container">
        <Layout>
          <Sider className="top-level-directory">目录1</Sider>
          <div className="top-level-directory" style={{width: this.state.showLevel2 ? '200px' : 0}}>123</div>
          <Content>
            <Button onClick={this.toggleShowLevel2}>展开二级</Button>
          </Content>
        </Layout>
      </div>
    );
  }
  toggleShowLevel2() {
    console.log(this.state.showLevel2)
    this.setState({
      showLevel2: !this.state.showLevel2,
    });
  }
}

export default Home;
