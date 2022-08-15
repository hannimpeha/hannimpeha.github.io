import React, { Component } from 'react';
import Navbar from './Navbar';


class Header extends Component {
    state = {
        activeIndex: null
    }
    handleClick = (index) => this.setState({ activeIndex: index });
    render() {
        const clickables = [
            { name: "Home"},
            { name: "Wiki"},
            { name: "Repo"},
            { name: "Blog"},
            { name: "Contact"},
            { name: "Login"}
            ];

        return (
            <nav className={"sticky-nav"}>
            <div>
                <ul className="nav-left">
                    {clickables.map((clickable, i) => {
                        return <Navbar
                            key={clickable.name}
                            name={clickable.name}
                            index={i}
                            isActive={this.state.activeIndex === i}
                            onClick={this.handleClick}
                        />
                    })
                    }
                </ul>
            </div>
                <div class="nav-right">
                    <input type="search" className="form-control rounded"
                           placeholder="Search" aria-label="Search"
                           aria-describedby="search-addon"/>
                    <button type="button" className="btn btn-outline-primary">
                        search</button>
                </div>
            </nav>
        )
    }
}

export default Header;