import React, {Component} from 'react';
import Header from './containers/Header.js';
import Footer from './containers/Footer.js';
import Main from './containers/Main.js';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "./Context";

export default()=> {
    return (
        <Router>
            <Main />
            <Footer />
        </Router>
    );
}
