import React, { Component } from 'react';
import '../App.css';

import GetDuration from '../events/GetDurationInMinSec.js'

class Tracks extends Component {
  
    render() {

      return (
        <div id='tracks'>
          <div id='tracks_title'>Tracks: </div> 
            <ul>
              {this.props.tracks.map(song =>
                <li className='track' onClick={() =>
                 {this.props.onTrackClick(song.track_name, song.preview_url, song.track_href)}}>
                  <div id="track_name">>{song.track_name}</div>
                  <div id="track_duration">{GetDuration(song.duration)}</div>
                </li>
              )}
            </ul>
        </div>
      );
    }
  }

  export default Tracks