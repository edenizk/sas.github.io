import React, { Component } from 'react';
import '../App.css';

import OrderBy from './OrderBy.js'
import OrderKey from './OrderKey.js'
import Filter from './Filter.js'
import AlbumCounter from './AlbumCounter.js'
import User from './User.js'

class TopBar extends Component{
    
    render(){
        let renderedAlbums = this.props.renderedAlbums
        let state = this.props.state

      return(
        <div id='top_bar'>
        <User user={state.user}/>  
        <Filter onTextChange={(text) => {
            state = {filterString: text, overlay: false}
            this.props.onTextChange(text)
          }}/>
          {state.overlay === false ? 
          <div>
            <AlbumCounter album={renderedAlbums}/>
            <div id='order_wrapper'>
              <div>Order By: </div>
              <OrderKey onKeyChange={(value) => {
                this.setState({order_key: value})
                }}/>
              <OrderBy onOrderByChange={(value) => {
                this.setState({order_by: value})
               if(value === '') this.updateAlbums(this.state.filterString)
              }}/>
            </div>
         </div>
         : <div></div>}
      </div>
      )
    }
  }

export default TopBar