import React, { Component } from 'react';
import './Background.css';
import Nav from '../Nav/Nav';

class Background extends Component {

    render() {
        return(
            <div className='background_container'>
                <Nav />
            </div>
        )
    }
}

export default Background;