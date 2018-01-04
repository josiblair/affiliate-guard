import React, { Component } from 'react';
import './Application.css';
import Nav from '../Nav/Nav';

class Application extends Component {

    render() {
        return(
            <div className='application_container'>
                <Nav />
            </div>
        )
    }
}

export default Application;