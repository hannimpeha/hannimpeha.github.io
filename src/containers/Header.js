import React, {Component, useContext} from 'react';
import Navbar from './Navbar';

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
            { name: "Blog"},
            { name: "Contact"}];
        return (
                <div>
                    {clickables.map((clickable, i) => {
                        return(
                        <React.Fragment>
                            <nav className="sticky-nav">
                                <ul className="nav-left">
                        <Navbar
                            key={clickable.name}
                            name={clickable.name}
                            index={i}
                            isActive={this.state.activeIndex === i}
                            onClick={this.handleClick}/>
                                </ul>
                            </nav>
                        </React.Fragment>

                        )
                    })}
                    <ul className="nav-right">
                         <input type="search" className="form-control rounded"
                                placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon"/>
                         <button type="button" className="btn btn-outline-primary">
                             search</button>
                    </ul>
                </div>
        );
    }
}

export default Header;