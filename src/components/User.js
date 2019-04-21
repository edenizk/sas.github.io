import React, { Component } from 'react';
import '../App.css';

class User extends Component{
    render(){
      let user = this.props.user
  
      return(
          <div id="user_wrapper">
            <a href={user.href} target='_blank' rel="noopener noreferrer">
              <div>{user.name}</div>
              <img src={user.avatar} alt="user avatar"></img>
              <span id='tip_text'>Go To Profile</span>
            </a>
          </div>
      )
    }
  }

export default User