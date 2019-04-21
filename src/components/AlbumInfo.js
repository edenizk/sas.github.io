import React, { Component } from 'react';
import '../App.css';

import GetDuration from '../events/GetDurationInMinSec.js'

class AlbumInfo extends Component {
    getTotalDuration(){
        let totalDuration = 0
        this.props.album.tracks.map((track) => totalDuration += track.duration)
        return GetDuration(totalDuration)
      }
      
    render() {
      return (
        <div id='overlay_info_text'>
            <div>
                <span>Album</span><br></br>
                <a href={this.props.album.album_url} target='_blank' rel="noopener noreferrer">
                {this.props.album.album_name}
                </a><br></br>
                <span>By </span>
                <a href={this.props.album.artist_url} target='_blank' rel="noopener noreferrer">
                {this.props.album.artist_name}
                </a><br></br>
                <span>Release Date: </span>{this.props.album.release_date}<br></br>
                <span>Total Tracks: </span>{this.props.album.total_tracks}<br></br>
                <span>Total Duration: </span>{this.getTotalDuration()}<span> min</span>
            </div>
        </div>
      );
    }
  }

  export default AlbumInfo