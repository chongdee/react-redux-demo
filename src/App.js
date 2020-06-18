import React from "react";
import { connect } from "react-redux";
// import { increment, decrement } from "./actions/counter";
import * as counterActions from './actions/counter'
import { bindActionCreators } from 'redux'

import User from './components/User'


class App extends React.Component {
  render() {
    console.log(this.props);
    const {counter, increment, decrement } = this.props;
    return (
      <div>
        {/* <h1>{this.props.value}</h1>
        <button onClick={this.props.onIncrement}>increment</button>
        <button onClick={this.props.onDecrement}>decrement</button> */}
        {/* <h1>{counter}</h1>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => decrement()}>decrement</button> */}
        <h1>{counter}</h1>
        <button onClick={() => this.props.counterActions.increment(5)}>
          increment
        </button>
        <button onClick={() => this.props.counterActions.decrement(5)}>
          decrement
        </button>

        <User/>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  console.log(state);
  
  return {
    counter:state.counter
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch(increment());
//     },
//     decrement: () => {
//       dispatch(decrement());
//     },
//   };
// };

const mapDispatchToProps = (dispatch)=>{
  return{
    counterActions:bindActionCreators(counterActions,dispatch)
  }
}

// 先后顺序不能颠倒，否则报错
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App
