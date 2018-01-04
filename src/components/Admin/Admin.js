import React, { Component } from 'react';
import './Admin.css';
import Nav from '../Nav/Nav';

class Admin extends Component {

    render() {
        return(
            <div className='admin_container'>
                <Nav />
            </div>
        )
    }
}

export default Admin;