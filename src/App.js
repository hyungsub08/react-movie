import React from 'react';
import Proptypes from 'prop-types';

class App extends React.Component {
  // state를 쓰기 위해서 component를 extends함

  state = {
    count: 1
  };

  
  add = () => {
    this.setState(current => ({count: current.count + 1})) ;
    // 객체 인자를 갖는 함수형를 실행한다고 생각할 것
  };

  minus = () => {
    this.setState(current => ({count: current.count - 1})) ;
    // 이 메소드가 동작할 때 랜더도 새롭게 되어야 값이 변한 것으로 동작을 한다. 
    // 이를 간편하게 하기 위해서 setState()를 활용하도록 합니다.
  }

  render() {
    return (
      <div>
        <h1>I'm a class component: {this.state.count}</h1>
        <button onClick={this.add}> Add </button>
        <button onClick={this.minus}> Minus </button>
      </div>
    );
  }
}

export default App;
