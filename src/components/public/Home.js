import React, {Component} from 'react';
import logo from '../../images/photos/namecard.png';

const Home =() =>{
        return (
            <div className="Home" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <img src={logo} class="center"/>
                <h1>Welcome to Hannah's homepage</h1>
            </div>
        );
}

export default Home;