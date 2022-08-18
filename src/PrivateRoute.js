import React from 'react';
import { ConsumerLogin } from './Context';
import { Route, Redirect } from 'react-router-dom';


export default ({ component: Component, ...rest })=>{
    return (
        <ConsumerLogin>
            {context => (
                <Route
                    {...rest}
                    render={props => context.authenticatedUser ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{
                            pathname: '/Signin',
                            state: { from: props.location }
                        }} />
                    )
                    }
                />
            )}
        </ConsumerLogin>
    );
};