import React, { Component } from 'react';
import Form from './Form';

export default class SignIn extends Component {
    state = {
        username: '',
        password: '',
        errors: [],
    }

    render() {
        const {
            username,
            password,
            errors,
        } = this.state;

        return (
            <div>
                <div>
                    <h1>Sign In</h1>
                    <Form
                        submit={this.submit}
                        submitButtonText="Sign In"
                        elements={() => (
                            <React.Fragment>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={username}
                                    onChange={this.change}
                                    placeholder="User Name" />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={this.change}
                                    placeholder="Password" />
                            </React.Fragment>
                        )} />
                </div>
            </div>
        );
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    submit = () => {
        const { context } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/authenticated' } };
        const { username, password } = this.state;

        context.actions.signIn(username, password)
            .then((user) => {
                if (user === null) {
                    this.setState(() => {
                        return { errors: [ 'Sign-in was unsuccessful' ] };
                    });
                } else {
                    this.props.history.push(from);
                }
            })
            .catch((error) => {
                console.error(error);
                this.props.history.push('/error');
            });
    }
}