import React, {Component, useContext} from 'react';
import Navbar from './Navbar';
import Login from "../components/login/Login";
import {Link} from "react-router-dom";
import Context, {withContext} from "../Context";

class Header extends Component {

    state = {
        activeIndex: null,
        username: '',
        password: '',
        errors: [],
    }

    render(){
    const clickables = [
            { name: "Home"},
            { name: "Wiki"},
            { name: "Repo"},
            { name: "Blog"},
            { name: "Contact"}];
        const authUser = Context.Context.Provider

        return (
            <nav>
                <div>
                <ul className="nav-left">
                    {clickables.map((clickable, i) => {
                        return(
                            <div>
                        <Link to={`/${clickable.name}`}>
                            <ul>
                            className={clickable.name}
                            onClick={this.handleClick}>{clickable.name}
                            isActive=()=>{this.state.activeIndex === i}
                            </ul>
                        </Link>
                            </div>)

                    })}
                    </ul>
                    <ul className="nav-right">
                         <input type="search" className="form-control rounded"
                                placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon"/>
                         <button type="button" className="btn btn-outline-primary">
                             search</button>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;