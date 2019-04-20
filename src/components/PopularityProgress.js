import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class PopularityProgress extends Component{
    constructor(){
        super()
        this.state={}
    }
    componentDidMount(){
        let symbol = this.props.popularity
        let color
        if(symbol > 80){
            symbol = '🔥'
            color = '#F7630C'}
        else if(symbol > 50){
            symbol = '😀'
            color = 'green'}
        else if(symbol > 0){
            symbol = '🤔'
            color = '#FFC83D'}

        this.setState({symbol: symbol, color: color})
    }
    render(){
        
        return(
            <div id='pop_progress'>
                  <div>Popularity</div>
                  <Progress percent={this.props.popularity} 
                   theme={{
                    success: {
                      symbol: '🔥',
                      color: '#F7630C'
                    },
                    active: {
                      symbol: this.state.symbol,
                      color: this.state.color
                    },
                    default: {
                      symbol: '😱',
                      color: '#fbc630'
                    }
                  }}
                  />
            </div>
        )
    }
}

export default PopularityProgress