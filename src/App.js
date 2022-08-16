import React, {Component} from 'react';
import Header from './containers/Header.js';
import Footer from './containers/Footer.js';
import Main from './containers/Main.js';
import { BrowserRouter as Router } from "react-router-dom";
import {withContext,Context} from './components/login/Context';


class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        );
    }
}
export default App;