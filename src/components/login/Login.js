import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
        const { context } = this.props;
        const authUser = context.authenticatedUser;
        return (
            <div>
                <div>
                    <nav>
                        {authUser ? (
                            <React.Fragment>
                                <span>Welcome, {authUser.name}!</span>
                                <Link to="/Logout">Log Out</Link>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Link to="/Login">Log In</Link>
                            </React.Fragment>
                        )}
                    </nav>
                </div>
            </div>
        );
    }
};