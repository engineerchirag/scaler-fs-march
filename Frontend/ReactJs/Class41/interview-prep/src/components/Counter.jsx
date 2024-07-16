import React from 'react';
// import { useState } from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Mounted');
  }

  shouldComponentUpdate(preProps, prevState) {
    console.log(preProps, prevState);
    return false;
  }

  componentDidUpdate() {
    console.log('updated value: ', this.state.count);
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

// const Counter = () => {
//     const [state, setState] = useState({
//         count: 0
//     });
//     return (
//         <div>
//         Count: {state.count}
//         <button onClick={() => setState({ count: state.count + 1 })}>
//           +
//         </button>
//       </div>
//     );
// }

export default Counter;
