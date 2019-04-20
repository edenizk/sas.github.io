import React, { Component } from 'react';
import '../App.css';

class User extends Component{
    render(){
      let user = this.props.user
  
      return(
          <div id="user_wrapper">
            <div>{user.name}</div>
            <a href={user.href} target='_blank' rel="noopener noreferrer">
              <img src={user.avatar} alt="user avatar"></img>
            </a>
          </div>
      )
    }
  }

export default User