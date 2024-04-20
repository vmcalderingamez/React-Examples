import { /* connect, */ useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
// import { Component } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(counterActions.decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(counterActions.increase(10))}>
          Increase by 5
        </button>
        <button onClick={() => dispatch(counterActions.increment())}>
          Increment
        </button>
      </div>
      <button onClick={() => dispatch(counterActions.toggle())}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch({type: 'increment'}),
//   decrement: () => dispatch({type: 'decrement'})
// })

// export default connect(mapStateToProps,  mapDispatchToProps)(Counter);
