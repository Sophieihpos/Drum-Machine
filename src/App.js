import React from 'react';
import './App.css';
import PadsContainer from './components/PadsContainer'
import Controls from './components/Controls'

// #E63946 #F1FAEE #A8DADC #457B9D #1D3557
// <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" ></audio>

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ''
    };
    this.displayClipName = this.displayClipName.bind(this);
  }

  displayClipName(name){
    this.setState({
      display: name
    });
  }

  render(){
    return (
      <div>
      <div id="drum-machine">
        <PadsContainer updateDisplay={this.displayClipName}/>
        <Controls display={this.state.display}/>
      </div>
      <footer>Created by <a href="https://twitter.com/sophiecantype" target="_blank">Sophie Chapman</a></footer>
      </div>
    );
  }
}

export default App;
