import React, {Component} from 'react';
import {Provider} from "./Context";
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        const {context} = this.props;
        const authUser = context.authenticatedUser;
        return (
                <div className="Login">
                    <nav>
                        {authUser ? (
                            <Link to ={`/${this.props.name}`}/>
                        ) : (
                            <Link to={`/${this.props.name}`}/>
                        )}
                    </nav>
                </div>
        );
    }
}
