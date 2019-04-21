import React, { Component } from 'react';
import '../App.css';

import PopularityProgress from './PopularityProgress.js'
import Tracks from './Tracks.js'
import AlbumInfo from './AlbumInfo.js'

class AlbumOverlay extends Component{
  constructor(){
    super()
    this.state = {
      current_song_href: ''
    }
  }
  componentDidMount() {
    this.albumHref = this.props.albumHref
    this.accessToken = this.props.accessToken

    fetch(`https://api.spotify.com/v1/albums/${this.albumHref}`, {
      headers: {'Authorization': 'Bearer ' + this.accessToken}
    }).then(response => response.json())
    .then(data => {
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
                               track_href: item.external_urls.spotify,
                               preview_url: item.preview_url}})
            }
        })
      }
      catch(e){
        console.log(e)
      }
    })
  }

  render(){
    return(
      <div id='overlay_wrapper'>
        {!this.state.album ?
        <div id='overlay_loading'>Loading...</div> 
        :
        <div id='album_details_wrapper'>
            <img id='album_background' src={this.state.album.image_url} alt='blured background'/>
            <div id='overlay_album_info'>
              <div id='inline_image_pop'>
                <PopularityProgress id="popularity_progress" popularity={this.state.album.popularity}/>
                <img id='album_cover' src={this.state.album.image_url} alt='album cover'/>
                <div id="player">
                  {this.state.current_song_href !== '' ? 
                    <a href={this.state.current_song_href} target='_blank' rel="noopener noreferrer">
                      Listen This Song on Spotify
                    </a> : <div></div>}
                  <audio autoPlay={true} 
                    onPlay={() => this.setState({current_song_statue: 'Playing:'})}
                    onPause={() => this.setState({current_song_statue: 'Paused:'})}
                    src={this.state.current_song_src} controls></audio>
                  <div>{this.state.current_song_statue} <br></br><span>{this.state.current_song}</span></div>
                </div>
              </div>
              <AlbumInfo album={this.state.album}></AlbumInfo>
            </div>
            <Tracks tracks={this.state.album.tracks} onTrackClick={(song, src, href) =>{ 
                         this.setState({
                          current_song: song,
                          current_song_src: src,
                          current_song_href: href
                           }) 
                           console.log(this.state.current_song_href)}}></Tracks>
        </div>
        }
      </div>
    )
  }
}

export default AlbumOverlay