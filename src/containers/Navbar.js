import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {

    handleClick = () => this.props.onClick(this.props.index)

    render() {
        return (
            <React.Fragment>
            <Link to={`/${this.props.name}`}>
                <li>
                    {this.props.isActive ? 'active' : ''}
                    {this.props.name}
                </li>
            </Link>
            </React.Fragment>
        );
    }
}
