import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {

    handleClick = () => this.props.onClick(this.props.index)

    render() {
        return (
            <Link to={`/${this.props.name}`}
                  className={this.props.isActive ? 'active' : ''}>
                  onClick={this.handleClick}>{this.props.name}
            </Link>
        );
    }
}
