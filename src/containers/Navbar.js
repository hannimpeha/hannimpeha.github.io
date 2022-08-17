import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Signout from "../components/login/Signout";


class Navbar extends Component {

    handleClick = (index) => this.props.onClick(this.props.index)
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        return (
            <Link to={`/${this.props.name}`}>
                <li
                    className={this.props.isActive ? 'active' : ''}
                    onClick={this.handleClick}> {this.props.name}
                </li>
            </Link>
        );
    }
}

export default Navbar;