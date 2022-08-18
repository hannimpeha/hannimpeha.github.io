import React, {Component, useContext} from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context'


const Login =()=> {
        const context = useContext(Context.Context)
        const authUser = context.authenticatedUser;

        return (
            <div>
                <nav>
                {authUser ? (
                    <React.Fragment>
                            <ul className="nav-right">
                        <span>Welcome, {authUser.name}!</span>
                        <Link to="/Signout">Sign Out</Link>
                            </ul>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                                <ul className="nav-right">
                        <Link to="/Signup">Sign Up</Link>
                        <Link to="/Signin">Sign In</Link>
                                </ul>
                    </React.Fragment>
                )}
                </nav>
            </div>
        )
}

export default Login;