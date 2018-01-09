import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav';

class Home extends Component {

    render() {
        return(
            <div className='home_container'>
                <div className='home_header'>
                    <Nav />
                </div>
            </div>
        )
    }
}

export default Home;