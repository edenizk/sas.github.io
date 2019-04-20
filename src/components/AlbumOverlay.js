import React, { Component } from 'react';
import '../App.css';

import PopularityProgress from './PopularityProgress.js'

class AlbumOverlay extends Component{
  constructor(){
    super()
    this.state = {}
  }
  componentDidMount() {
    this.albumHref = this.props.albumHref
    this.accessToken = this.props.accessToken

    fetch(`https://api.spotify.com/v1/albums/${this.albumHref}`, {
      headers: {'Authorization': 'Bearer ' + this.accessToken}
    }).then(response => response.json())
    .then(data => {
     // console.log(data)
      try{
        this.setState({
          album: {
              artist_url: data.artists[0].external_urls.spotify,
              artist_name: data.artists[0].name,
              album_url: data.external_urls.spotify,
              image_url: data.images[0].url,
              album_name: data.name,
              popularity: data.popularity,
              release_date: data.release_date,
              total_tracks: data.total_tracks,
              tracks: data.tracks.items.map((item) =>
                             {return {
                               duration: item.duration_ms,
                               track_name: item.name,
                               preview_url: item.preview_url}})
            }
        })
      }
      catch(e){
        console.log(e)
      }
    })
  }

  getDuration(ms){
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0) - 1;
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  getTotalDuration(){
    let totalDuration = 0
    this.state.album.tracks.map((track) => totalDuration += track.duration)
    console.log(this.getDuration(totalDuration))
    return this.getDuration(totalDuration)
  }

  render(){
    console.log(this.state)
    return(
      <div id='overlay_wrapper'>
        {!this.state.album ?
        <div id='overlay_loading'>Loading...</div> 
        :
        <div id='album_details_wrapper'>
            <img id='album_background' src={this.state.album.image_url} alt='blured background'/>
            <div id='overlay_album_info'>
              <div id='inline_image_pop'>
                <PopularityProgress popularity={this.state.album.popularity}/>
                <img id='album_cover' src={this.state.album.image_url} alt='album cover'/>
                <div id="player">
                  <audio autoPlay='true' 
                    onPlay={() => this.setState({current_song_statue: 'Playing:'})}
                    onPause={() => this.setState({current_song_statue: 'Paused:'})}
                    src={this.state.current_song_src} controls></audio>
                  <div>{this.state.current_song_statue} <br></br><span>{this.state.current_song}</span></div>
                </div>
              </div>
              <div id='overlay_info_text'>
                <div>
                  <span>Album</span><br></br>
                  <a href={this.state.album.album_url} target='_blank' rel="noopener noreferrer">
                    {this.state.album.album_name}
                  </a><br></br>
                  <span>By </span>
                  <a href={this.state.album.artist_url} target='_blank' rel="noopener noreferrer">
                    {this.state.album.artist_name}
                  </a><br></br>
                  <span>Release Date: </span>{this.state.album.release_date}<br></br>
                  <span>Total Tracks: </span>{this.state.album.total_tracks}<br></br>
                  <span>Total Duration: </span>{this.getTotalDuration()}<span> min</span>
                </div>
              </div>
            </div>
            <div id='tracks'> 
                <ul>
                {this.state.album.tracks.map(song =>
                <li className='track' onClick=
                    {() => {this.setState({
                    current_song: song.track_name,
                    current_song_src: song.preview_url})}}>
                  <div id="track_name" >
                    <img alt='album cover'></img>
                    <div>{song.track_name}</div>
                  </div>
                  <div id="track_duration">{this.getDuration(song.duration)}</div>
                </li>
              )}
                </ul>
            </div>
        </div>
        }
      </div>
    )
  }
}

export default AlbumOverlay