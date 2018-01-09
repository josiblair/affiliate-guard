import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

class Nav extends Component {

    render() {
        return(
            <div className='nav_container'>
                <div>
                    <Link to='/'><img src={logo} alt='' className='nav_logo'/></Link>
                </div>

                <div className='nav_links'>
                    <Link to='/about' className='nav_name'>About Us</Link>
                    <Link to='/affiliateshare' className='nav_name'>Affiliate Share</Link>
                    <Link to='/application' className='nav_name'>Application</Link>
                    <div className='dropdown'>
                        <span className='nav_name'>Resources</span>
                        <div className='dropdown_content'>
                            <Link to='/specialevent' className='nav_name'>Special Event Coverage</Link>
                            <Link to='/waivers' className='nav_name'>Templates / Waivers</Link>
                            <Link to='/backgroundcheck' className='nav_name'>Background Checks</Link>
                        </div>
                    </div>
                    <Link to='/contact' className='nav_name'>Contact</Link>
                    <span className='nav_name'>Make A Payment</span>
                </div>
            </div>
        )
    }
}

export default Nav;