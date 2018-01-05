import React, { Component } from 'react';
import './Waivers.css';
import Nav from '../Nav/Nav';
import logo from '../../images/logo.png';

class Waivers extends Component {

    render() {
        return(
            <div className='waivers_container'>
                <Nav />

                <div className='waivers_header'>
                    <img src={logo} alt='logo' />

                    <div>
                        <div className='waivers_contact'>
                            {/* <span>Facebook Link</span>
                            <span>Email Link</span> */}
                            <span>801-677-0076</span>
                            <span>46 W 200 S - BOUNTIFUL, UT 84010</span>
                        </div>
                        <h1>Templates / Sample Waivers</h1>
                    </div>
                </div>

                <div className='waivers_body'>
                    <h2>Feel free to download any templates you see below to use for your gym.</h2>
                </div>
            </div>
        )
    }
}

export default Waivers;