import React, {Component} from 'react';
import Header from './containers/Header.js';
import Footer from './containers/Footer.js';
import Main from './containers/Main.js';
import { BrowserRouter as Router } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";


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