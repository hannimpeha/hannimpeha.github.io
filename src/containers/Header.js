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
        return (
            <nav>
                <div>
                <ul className="nav-left">

                    {clickables.map((clickable, i) => {
                        return(
                        <React.Fragment>
                        <Navbar
                            key={clickable.name}
                            name={clickable.name}
                            index={i}
                            isActive={this.state.activeIndex === i}
                            onClick={this.handleClick}/>
                        </React.Fragment>
                        )
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