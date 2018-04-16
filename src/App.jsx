import React from 'react';
import Board from './Board';

class App extends React.Component {
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
