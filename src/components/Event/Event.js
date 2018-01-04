import React, { Component } from 'react';
import './Event.css';
import Nav from '../Nav/Nav';

class Event extends Component {

    render() {
        return(
            <div className='event_container'>
                <Nav />
            </div>
        )
    }
}

export default Event;