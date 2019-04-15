import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  componentDidCatch() {
    console.log("Something Went Wrong");
  }

  render() {
    return (
      <div className="ImgCard" onClick={this.props.chooseSound}>
        <img
          src={require(`../../UkuleleImg/${this.props.source}Chord.png`)}
          alt="imgSrc"
        />
      </div>
    );
  }
}

export default Card;
