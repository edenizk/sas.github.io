import React, { Component } from 'react';
import '../App.css';

import Balloons from './Balloons.js'
import SocialMedia from './SocialMedia.js'

class SignIn extends Component {
    render() {
        return (
        <div id="sign_in_wrapper">
            <div id="sign_in">
                <img alt=''></img>
                <div id='title'>S. A. S.</div>
                <div id='note'>(Spotify Album Searcher)</div>
                <button onClick={() => window.location = 'https://s-a-s-backend.herokuapp.com/login' }
                >Sign in with Spotify</button>
            </div>
            <div id="filter"></div>
            <div id="background_balloons">
                <Balloons/>
            </div>
            <SocialMedia/>
        </div>
        );
    }
}

export default SignIn