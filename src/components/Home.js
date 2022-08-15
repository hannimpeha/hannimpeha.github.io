import React from 'react';
import logo from '../images/photo/namecard.png';

const Home = ()=>  {
    return(
    <div className="Home" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <img src={logo} class="center"/>
        <h1>Welcom to Hannah's homepage</h1>
    </div>
    );
}
export default Home;