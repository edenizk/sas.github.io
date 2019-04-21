import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string';

import Album from './components/Album.js'
import SignIn from './components/SignIn.js'
import AlbumOverlay from './components/AlbumOverlay.js';
import TopBar from './components/TopBar.js';

import CompareValues from './events/CompareValues.js'

class App extends Component {
  constructor() {
    super()
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token;

    this.state = {
      serverData: {},
      filterString: 'rock',
      accessToken: accessToken,
      order_key: 'name',
      order_by: '',
      overlay: false,
      overlay_album: ''
    }
  }

  componentDidMount() {
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + this.state.accessToken}
    }).then(response => response.json())
    .then(data => {
      try{
        this.setState({
        user: {
          name: data.display_name,
          avatar: data.images[0].url,
          href: data.external_urls.spotify
        }})
      }
      catch(e){
        console.log(e)
      }
    })

    this.updateAlbums('rock');
  }

  updateAlbums(text){
    let modifiedText = text.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '') 

    fetch('https://api.spotify.com/v1/search?q=album%3A' + modifiedText + '&type=album', {
      headers: {'Authorization': 'Bearer ' + this.state.accessToken}
    }).then(response => response.json())
    .then(data => {
      try {
        this.setState({
          albums: data.albums.items.map(item => {
            return{
              type: item.album_type,
              name: item.name,
              artist_name: item.artists[0].name,
              imageUrl: item.images[0].url,
              total_tracks: item.total_tracks,
              date: item.release_date,
              href: item.id
            }
          })
        })
      } catch (e) {
          console.log(e)
      }})
  }

  changeOverlayHref(album_href){
    this.setState({overlay: true})
    this.href = album_href
  }

  render() {
    let renderedAlbums =
      this.state.user &&
      this.state.albums ? 
        this.state.albums
        : [] 

    if(this.state.order_by !== '')
      renderedAlbums.sort(CompareValues(this.state.order_key, this.state.order_by)) 

    return (
      <div className="App">
        {!this.state.user ? 
          <SignIn/> : 
          <div id="main_wrapper">
            <TopBar renderedAlbums={renderedAlbums} state={this.state} 
              onTextChange={(text) => 
                { this.setState({filterString: text, overlay:false})
                  this.updateAlbums(text)}}
              onOrderKeyChange={(order_key_value) => 
                {this.setState({order_key: order_key_value})
                this.updateAlbums(this.state.filterString)
              }}
              onOrderByChange={(order_by_value) => 
               {this.setState({order_by: order_by_value})
               this.updateAlbums(this.state.filterString)
               }}/>
            {!this.state.overlay ?
               <div className="main_content_body">
                  <div id="album_wrapper_background"></div>
                  {renderedAlbums.map(renderedAlbum =>
                    <Album album={renderedAlbum} 
                      onButtonClick={(album_href) => {
                      this.setState({overlay: true, overlay_album_href: album_href})
                    }}/>
                 )}
               </div>
                :
              <div className="main_content_body">
                <div id='close_overlay_button'
                onClick={() => {this.setState({overlay: false})}}>X</div>
                <AlbumOverlay albumHref={this.state.overlay_album_href} accessToken={this.state.accessToken}/>
              </div>
            }
          </div> 
        }
      </div>
    )
  }
}

export default App;
