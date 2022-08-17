import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

function Private ({ component: Component, ...rest }){
    return (
        <Consumer>
            {context => (
                <Route
                    {...rest}
                    render={props => context.authenticatedUser ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{
                            pathname: '/Login',
                            state: { from: props.location }
                        }} />
                    )
                    }
                />
            )}
        </Consumer>
    );
};

export default Private;