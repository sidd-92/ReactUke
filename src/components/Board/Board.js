import React, { Component } from "react";
import Card from "../Card/Card";
import Sound from "react-sound";
import _ from "underscore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Board.css";
var ConsoleLogHTML = require("console-log-html");
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: "STOPPED",
      playButtonText: "Play",
      duration: 1000,
      soundFileUrl: require("../../UkuleleAudio/StartMenu/UStart1.m4a")
    };
  }
  notify = duration => toast("Wow so easy !", { autoClose: duration });

  componentDidCatch() {
    console.log("Board: Error");
  }

  playMusic = () => {
    this.setState({ playStatus: "PLAYING", playButtonText: "Stop" });
    if (this.state.playButtonText === "Stop") {
      this.setState({ playStatus: "STOPPED", playButtonText: "Play" });
    }
  };

  playSpecificSound = soundFile => {
    let url = this.state.soundFileUrl;
    switch (soundFile) {
      case "A":
        url = require("../../UkuleleAudio/AChord.m4a");
        break;
      case "B":
        url = require("../../UkuleleAudio/BChord.m4a");
        break;
      case "C":
        url = require("../../UkuleleAudio/CChord.m4a");
        break;
      case "D":
        url = require("../../UkuleleAudio/DChord.m4a");
        break;
      case "E":
        url = require("../../UkuleleAudio/EChord.m4a");
        break;
      case "F":
        url = require("../../UkuleleAudio/FChord.m4a");
        break;
      case "G":
        url = require("../../UkuleleAudio/GChord.m4a");
        break;
      default:
        url = require("../../UkuleleAudio/StartMenu/UStart1.m4a");
        break;
    }
    this.setState({ soundFileUrl: url });
  };
  handleSongPlaying = () => {
    //this.notify();
  };
  songLoad = song => {
    //console.log("LOAD", song.duration);
    ConsoleLogHTML.connect(document.getElementById("myULContainer"));
    console.log(_.random(7));
    this.notify(song.duration);
    this.setState({ duration: song.duration });
  };
  songStopped = song => {};
  render() {
    let url = this.state.soundFileUrl;
    return (
      <React.Fragment>
        <div className="Board">
          <Card source="A" chooseSound={() => this.playSpecificSound("A")} />
          <Card source="B" chooseSound={() => this.playSpecificSound("B")} />
          <Card source="C" chooseSound={() => this.playSpecificSound("C")} />
          <Card source="D" chooseSound={() => this.playSpecificSound("D")} />
          <Card source="E" chooseSound={() => this.playSpecificSound("E")} />
          <Card source="F" chooseSound={() => this.playSpecificSound("F")} />
          <Card source="G" chooseSound={() => this.playSpecificSound("G")} />
        </div>
        <Sound
          url={url}
          playStatus={this.state.playStatus}
          onPlaying={this.handleSongPlaying}
          onLoad={this.songLoad}
          onStop={this.songStopped}
        />
        <button onClick={this.playMusic}>
          {this.state.playStatus === "STOPPED"
            ? this.state.playButtonText
            : this.state.playButtonText}
        </button>
        <ToastContainer />
        <ul id="myULContainer" />
      </React.Fragment>
    );
  }
}

export default Board;
