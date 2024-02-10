import React, { Component } from "react";

class Sounder extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef(); // create a reference to the audio element
  }

  handlePlayButtonClick = () => {
    // play the audio when the button is clicked
    this.audioRef.current.play();
  };

  render() {
    return (
      <div>
        <audio ref={this.audioRef} controls>
          <source src={this.props.audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={this.handlePlayButtonClick}>{this.props.text}</button>
      </div>
    );
  }
}

export default Sounder;
