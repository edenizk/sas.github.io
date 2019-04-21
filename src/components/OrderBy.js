import React, { Component } from 'react';
import '../App.css';

class OrderBy extends Component{
    constructor(){
      super();
      this.state = {
        rotation: 0,
        value: ''
      }
    }
  
    changeSource(){
      let updatedRotation = this.state.rotation
      let updatedValue = this.state.value
  
      if(updatedRotation === 90) {
        updatedRotation = 0
        updatedValue = ''
      }
      else if (updatedRotation === -90) {
        updatedRotation = 90
        updatedValue = 'desc'
      }
      else if(updatedRotation === 0) {
        updatedRotation = -90
        updatedValue = 'asc'
      }
      
      this.state.rotation = updatedRotation
      this.state.value = updatedValue
    }
  
    render(){
      return(
        <img id="order_by" src={require('../icons/arrow.svg')} alt='asc/desc'
         style={{transform: `rotate(${this.state.rotation}deg)`}}
        onClick={() => {
          this.changeSource()
          this.props.onOrderByChange(this.state.value)
        }}></img>
      )
    }
  }
  
  export default OrderBy