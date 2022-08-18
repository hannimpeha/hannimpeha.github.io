import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import './images/styles/global.css';
import './images/styles/new.css';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "./Context";

ReactDOM.render(
    (<Provider>
        <App />
    </Provider>),
    document.getElementById('root'));