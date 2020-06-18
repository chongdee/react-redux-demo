import React from "react";

export default class Child extends React.Component {
  handleClick = () => {
    this.props.onMyEvent('子组件数据')
  };
  render() {
    return (
      <div>
        获取父组件的数据：{this.props.title}
        <button onClick={this.handleClick}>传递数据</button>
      </div>
    );
  }
}
