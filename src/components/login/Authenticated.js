import React, {useContext} from 'react';
import Context from '../../Context';

export default () => {
    const context = useContext(Context.Context);
    const authUser = context.authenticatedUser;
    return (
        <div>
            <div>
                <h1>{authUser.name} is authenticated!</h1>
                <p>Your username is {authUser.name}.</p>
            </div>
        </div>
    );
}