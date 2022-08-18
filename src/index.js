import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './main.css';
import {Provider} from "./Context";

render(
    (<Provider>
        <App />
    </Provider>),
    document.getElementById('root'));