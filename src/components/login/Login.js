import React, { Component } from 'react';
import Form from './Form';



class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    render() {
        const {
            username,
            password,
        } = this.state;

        return (
            <div className="Login" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
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

    cancel = () => {
        this.props.history.push('/');
    }
}

export default Login;