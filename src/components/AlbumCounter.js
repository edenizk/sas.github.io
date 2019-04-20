import React, { Component } from 'react';
import '../App.css';

class AlbumCounter extends Component {
    render() {
      return (
        <div className="counter">
          <div>{this.props.album.length} album(s) found</div>
        </div>
      );
    }
  }

  export default AlbumCounter