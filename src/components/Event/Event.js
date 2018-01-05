import React, { Component } from 'react';
import './Event.css';
import Nav from '../Nav/Nav';
import logo from '../../images/logo.png';

class Event extends Component {

    render() {
        return(
            <div className='event_container'>
                <Nav />

                <div className='event_header'>
                    <img src={logo} alt='logo' />

                    <div>
                        <div className='event_contact'>
                            {/* <span>Facebook Link</span>
                            <span>Email Link</span> */}
                            <span>801-677-0076</span>
                            <span>46 W 200 S - BOUNTIFUL, UT 84010</span>
                        </div>
                        <h1>Hosting an Event?</h1>
                    </div>
                </div>

                <div className='event_body'>
                    <h2>If you are hosting a special event, or simply need additional coverage, we are here to help.</h2>
                    <p>Use the link below for your Special Event Coverage.</p>

                    <a>SPECIAL EVENT/ACCIDENT MEDICAL >></a>
                </div>

            </div>
        )
    }
}

export default Event;