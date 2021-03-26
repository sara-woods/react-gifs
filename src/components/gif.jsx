import React, { Component } from 'react';

class Gif extends Component {


  render() {
    const src=`https://i.giphy.com/media/${this.props.id}/200w.webp`;
    return (
        <img className="gif" src={src}/>
    )
  }
  
}

export default Gif;
