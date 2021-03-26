import React, { Component } from 'react';

class Searchbar extends Component {

  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-input form-search" onChange={this.handleChange} />
    )
  }
}

export default Searchbar;
