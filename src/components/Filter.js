import React, { Component } from 'react';
import '../App.css';

class Filter extends Component {
    render() {
      return (
        <div id="filter_wrapper">
          <input id="filter_input" placeholder="Search..." type="text" onKeyUp={(event) =>{
            this.props.onTextChange(event.target.value)
          }}/>
        </div>
      );
    }
  }

export default Filter