import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';
export const Context = React.createContext();

export class Provider extends Component {

    constructor() {
        super();
        this.data = new Data();
        this.cookie = Cookies.get('authenticatedUser');
        this.state = {authenticatedUser:  this.cookie? JSON.parse(this.cookie): null};
    }

    render() {
        const { authenticatedUser } = this.state;
        const value = {
            authenticatedUser,
            data: this.data,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut
            },
        };
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>

        );
    }


    signIn = async (username, password) => {
        const user = await this.data.getUser(username, password);
        if (user !== null) {
            this.setState(() => {
                return {
                    authenticatedUser: user,
                };
            });
            const cookieOptions = {
                expires: 1 // 1 day
            };
            Cookies.set('authenticatedUser', JSON.stringify(user), {cookieOptions});
        }
        return user;
    }

    signOut = () => {
        this.setState({ authenticatedUser: null });
        Cookies.remove('authenticatedUser');
    }

}

export const ConsumerLogin = Context.Consumer;

export function withContext(Component) {
    return function ContextComponent(props) {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        );
    }
}

export default {withContext, Context}