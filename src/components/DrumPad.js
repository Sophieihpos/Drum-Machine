import React from 'react';

class DrumPad extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress(event){
    if (event.keyCode === this.props.keyCode){
      this.playSound();
    }
  }

  playSound(){
    this.audio.play();
    this.props.updateDisplay(this.props.name.replace(/-/g, ' '));
  }

    render(props){
      return(
        <div className="drum-pad" onClick={this.playSound} id={this.props.name}>
          {this.props.keyTrigger}
          <audio className="clip" id={this.props.keyTrigger} src={this.props.url} ref={(audioTag) => { this.audio = audioTag }}/>
        </div>
      )
    }
}

export default DrumPad;
