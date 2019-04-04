import React, { Component } from "react";

export default class Drumpad extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.playMusic = this.playMusic.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playMusic = () => {
    this.props.updateDisplay(this.props.id);
    const sound = document.getElementById(this.props.keyStroke);
    sound.currentTime = 0;
    sound.play();
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playMusic();
    }
  }

  render() {
    return (
      <div className="drum-pad row" id={this.props.id} onClick={this.playMusic}>
        <p>{this.props.keyStroke}</p>
        <audio
          className="clip"
          src={this.props.src}
          id={this.props.keyStroke}
          key={this.props.id}
        />
      </div>
    );
  }
}
