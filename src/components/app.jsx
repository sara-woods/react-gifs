import React, { Component } from 'react';
import Searchbar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "9V8YiWAcXYxT14YXHI"
    }
  }
  
  setGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    // API call
    // Search with options using callback
    giphy("RRUDVRlOkuM73CKyapBAIzAiBkcI2E2P").search({
      q: query,
      rating: 'g'
    }, (error, result) => {
    // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Searchbar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} setGifFunction={this.setGif} />
        </div>
      </div>
    )
  }

}

export default App;
