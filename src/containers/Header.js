import React, { Component } from 'react';
import Navbar from './Navbar';
import { Div, Input, Button } from "atomize";

const theme = {
    colors: {
        black900: "#1d1d1e"
    }
};

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
            <nav>
            <Div>
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
            </Div>
            <Div>
                <ul class="nav-right">
                    <Input type="search" className="form-control rounded"
                           placeholder="Search" aria-label="Search"
                           aria-describedby="search-addon"/>
                    <Button type="button" className="btn btn-outline-primary">
                        search</Button>
                </ul>
            </Div>
            </nav>
        );
    }
}

export default Header;