import React, { Component } from "react";
import "./App.css";
import Drumpad from "./components/drumpad";

const data = [
  {
    keyStroke: "Q",
    keyCode: 81,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    id: "Combo 1"
  },
  {
    keyStroke: "W",
    keyCode: 87,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    id: "Combo 2"
  },
  {
    keyStroke: "E",
    keyCode: 69,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    id: "Combo 3"
  },
  {
    keyStroke: "A",
    keyCode: 65,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    id: "Combo 4"
  },
  {
    keyStroke: "S",
    keyCode: 83,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    id: "Clap"
  },
  {
    keyStroke: "D",
    keyCode: 68,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    id: "High Hat"
  },
  {
    keyStroke: "Z",
    keyCode: 90,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    id: "Bass"
  },
  {
    keyStroke: "X",
    keyCode: 88,
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    id: "Bass Kick"
  },
  {
    keyStroke: "C",
    keyCode: 67,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    id: "Muted High Hat"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "Click or push a key"
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay = display => {
    console.log("Update display called");
    this.setState({ display });
  };

  render() {
    return (
      <div>
        <div id="drum-machine">
          <div id="display">{this.state.display}</div>
          <div className="col">
            {data.map(x => (
              <Drumpad
                keyStroke={x.keyStroke}
                src={x.src}
                id={x.id}
                keyCode={x.keyCode}
                updateDisplay={this.updateDisplay}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
