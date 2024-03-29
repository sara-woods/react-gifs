import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {



  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} setGifFunction={this.props.setGifFunction} />)}
      </div>
    )
  }
  
}

export default GifList;
