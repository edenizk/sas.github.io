import React, { Component } from 'react';
import '../baloons.css';

class Balloons extends Component {
    createTable = () => {
        let balloons = []
        for (var i=0; i < 8; i++) {
            balloons.push(<div className={'balloon balloon' + i}></div>)
        }
        return balloons
    }
    render() {
        return (
        <div className="balloons">
            {this.createTable()}
        </div>
        );
    }
}

export default Balloons