import React from 'react';
import Footer from './containers/Footer.js';
import Main from './containers/Main.js';
import { BrowserRouter as Router } from "react-router-dom";

export default()=> {
    return (
        <Router>
            <Main />
            <Footer />
        </Router>
    );
}
