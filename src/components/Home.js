import React from 'react';
import logo from '../images/photo/namecard.png';

const Home = ()=>  {
    return(
    <div className="Home" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <img src={logo} class="center"/>
    </div>
    );
}
export default Home;