import React, { Component } from 'react';
import '../App.css';

import Balloons from './Balloons.js'

class SignIn extends Component {
    render() {
        return (
        <div id="sign_in_wrapper">
            <div id="sign_in">
                <img></img>
                <div id='title'>S. A. S.</div>
                <div id='note'>(Spotift Album Searcher)</div>
                <button onClick={() => window.location = 'http://localhost:8888/login' }
                >Sign in with Spotify</button>
            </div>
            <div id="filter"></div>
            <div id="background_balloons">
                <Balloons/>
            </div>
            <div id='social_media'>
                <a id="git" href="https://github.com/edenizk" target="_blank">
                    <img alt=''/>
                </a>
                <a id="www" href="http://bit.ly/edenizkos" target="_blank">
                    <img alt=''/>
                </a>
                <a id="linkedin" href="https://www.linkedin.com/in/edkos/" target="_blank">
                    <img alt=''/>
                </a>
            </div>
        </div>
        );
    }
}

export default SignIn