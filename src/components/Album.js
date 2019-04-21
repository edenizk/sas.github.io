import React, { Component } from 'react';
import '../App.css';

class Album extends Component 
{
  constructor(){
    super();
    this.state = {
      overlay_style: 'none',
    }
  }
  render() 
  {
    let album = this.props.album

    return (
      <div className='album'>
        <div  id="album_wrapper" style={{display: this.state.album_style}}>
          <img src={album.imageUrl} alt={album.name + ' album cover'}/>
          <div id="album_info">
            <div>
              {album.type.charAt(0).toUpperCase() + album.type.slice(1)}<br/>
              <span>{album.name}</span><br/>
              By <span>{album.artist_name}</span><br/>
              Date <span>{album.date}</span><br/>
              <span>{album.total_tracks}</span> song(s)<br/>
            </div>
            <button onClick={() => {this.props.onButtonClick(album.href)}}
              >Open Album</button>
          </div>
          
        </div>
      </div>
    )
  }
  
}


export default Album