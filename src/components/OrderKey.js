import React, { Component } from 'react';
import '../App.css';

class OrderKey extends Component{
    render(){
      return(
          <select id='order_key' name={'order_key'} onChange={(selected) => this.props.onKeyChange(selected.target.value)}>
            <option value='name'>Album</option>
            <option value='artist_name'>Artist</option>
            <option value='date'>Date</option>
          </select>
      )
    }
  }

export default OrderKey