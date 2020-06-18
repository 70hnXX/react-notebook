import React, { Component, Fragment } from 'react';
// import { Button } from "antd";
import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import './Directory.css'

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directories: [
        {
          id: 1,
          name: '工作',
          count: 16,
          children: [
            {
              id: 11,
              name: '工作1',
              count: 2,
              children: [
                {
                  id: 111,
                  name: '工作1-1',
                  count: 2,
                }
              ]
            },
            {
              id: 12,
              name: '工作2',
              count: 14,
            }
          ]
        },
        {
          id: 2,
          name: '学习',
          count: 16,
          children: [
            {
              id: 21,
              name: '学习1',
              count: 2,
            },
            {
              id: 22,
              name: '学习2',
              count: 14,
              children: [
                {
                  id: 222,
                  name: '学习2-1',
                  count: 14,
                }
              ]
            }
          ]
        }
      ],
      showLevel2: false
    };
    this.recurRenderDirect = this.recurRenderDirect.bind(this);
    this.caculatHeight = this.caculatHeight.bind(this);
  }
  recurRenderDirect(arr, level) {
    let direcList = []
    arr.map((item, index) => {
      direcList.push(
        <div key={'Level' + level + '-' + index + item.id} 
        className={level === 1 ? "top-level" : "sub-level"}
        style={{height:item.height ? item.height + 'px' : '40px'}}
        >
          {
            item.children && item.children.length ?
              <div 
              onClick={this.toggleExpaned.bind(this, item)} 
              className={[item.isActive ? "active" : null, "directories"].join(' ')}
              >
                {item.expanded ? <CaretDownOutlined style={{ color: "#007EFF" }} /> : <CaretRightOutlined style={{ color: "#C0C4CC" }} />}
                <i className="iconfont iconwenjian"></i>
                {item.name}
              </div>
              : <div className="directories icon-padding"><i className="iconfont iconwenjian"></i>{item.name}</div>
          }
          <div className="directories" style={{ height: item.expanded ? "100%" : 0 }}>
            {item.children && item.children.length ?
              this.recurRenderDirect(item.children, level + 1)
              : null}
          </div>
        </div>
      )
    })
    return direcList
  }
  render() {
    return (
      <Fragment>
        <div className="side-container">
          <div className="directory-list">
            {
              this.recurRenderDirect(this.state.directories, 1)
            }
          </div>
        </div>
      </Fragment>
    );
  }
  toggleExpaned(item) {
    let newDirectories = this.recurSetExpanded(this.state.directories, item)
    this.setState({
      directories: newDirectories
    })
    this.setHeight()
  }
  recurSetExpanded(arr, item) {
    // debugger
    let hasExpand = false
    arr.forEach(element => {
      if (element.id === item.id) {
        element.expanded = !element.expanded
        element.isActive = true
        hasExpand = true
      } else {
        element.isActive = false
        element.expanded = false 
      }
      if (element.children && element.children.length > 0) {
        let result = this.recurSetExpanded(element.children, item)
        if (result.hasExpand) {
          element.expanded = true
          hasExpand = true
        }
      }
    });
    return {
      arr,
      hasExpand
    }
  }
  setHeight() {
    // 计算下每个目录的高度
    let newArr = this.caculatHeight(JSON.parse(JSON.stringify(this.state.directories)))
    console.log(newArr)
    this.setState({
      directories:newArr
    })  
  }
  caculatHeight(arr) {
    arr.forEach(item => {
      if (item.expanded) {
        item.height = item.children && item.children.length > 0 ? (this.findExpandNode(item.children) + 1) * 40 : 40
      } else {
        item.height = 40
      }
      if (item.children && item.children.length > 0) {
        this.caculatHeight(item.children)
      }
    })
    return arr

  }
  findExpandNode(arr) {
    let count = arr.length
    arr.forEach(item => {
      if (item.expanded) {
        count += item.children && item.children.length ? item.children.length : 0
      } else {
        if (item.children && item.children.length > 0) {
          count += this.findExpandNode(item.children)
        }
      }
    })
    return count
  }
}

export default Directory;