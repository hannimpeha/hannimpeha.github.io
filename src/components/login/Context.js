import React, { Component } from 'react';

export const Context = React.createContext();

export class Provider extends Component {

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
        }
        return user;
    }

    signOut = () => {
        this.setState({ authenticatedUser: null });
    }
}

export const Consumer = Context.Consumer;


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