import React, {Component, useContext} from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context'


const Login =()=> {
        const context = useContext(Context.Context)
        const authUser = context.authenticatedUser;

        return (
            <div>
                {authUser ? (
                    <React.Fragment>
                        <span>Welcome, {authUser.name}!</span>
                        <Link to="/Signout">Sign Out</Link>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Link to="/Signup">Sign Up</Link>
                        <Link to="/Signin">Sign In</Link>
                    </React.Fragment>
                )}
            </div>
        )
}

export default Login;