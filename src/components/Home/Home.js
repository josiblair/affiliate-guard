import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav';

class Home extends Component {

    render() {
        return(
            <div className='home_container'>
                <Nav />
            </div>
        )
    }
}

export default Home;