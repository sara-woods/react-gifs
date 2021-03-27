import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.setGifFunction) {
      this.props.setGifFunction(this.props.id);
    }
  }

  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/200w.webp`;

    return (
      <img className="gif" src={src} onClick={this.handleClick} alt="gif" />
    );
  }
}

export default Gif;
