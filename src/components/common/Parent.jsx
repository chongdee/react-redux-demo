import React from "react";
import Child from "./Child";

export default class Parent extends React.Component {
  state = {
    value:''
  }

  handleReceive = (data) => {
    console.log(data);
    this.setState({
      value:data
    })
    
  };
  render() {
    return (
      <div>
        获取子组件数据：{this.state.value}
        <Child title="父组件child-title" onMyEvent={this.handleReceive} />
      </div>
    );
  }
}
