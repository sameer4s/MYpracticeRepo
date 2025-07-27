import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  UpdateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  UpdateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Mall Entry Counter</h2>
        <p>People Entered: {this.state.entryCount}</p>
        <p>People Exited: {this.state.exitCount}</p>
        <button onClick={this.UpdateEntry}>Login</button>
        <button onClick={this.UpdateExit} style={{ marginLeft: '10px' }}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
