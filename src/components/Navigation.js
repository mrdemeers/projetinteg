import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation container-fluid d-flex justify-content-center">           
            <NavLink exact to ="/" activeClassName="nav-active">
                Popular
            </NavLink>
            <NavLink exact to ="/search" activeClassName="nav-active">
                Search
            </NavLink>
            <NavLink exact to ="/categories" activeClassName="nav-active">
                Categories
            </NavLink>
    
        </div>
    )
}

export default Navigation;