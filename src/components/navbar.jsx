import React, { Component } from 'react';

//Stateless Function Component
const NavBar = ( { totalCounters } ) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                 {" "}
                <span className="badge badge-pill badge-secondary">
                    { totalCounters }
                </span>
            </a>
        </nav>
    );
};

export default NavBar;
