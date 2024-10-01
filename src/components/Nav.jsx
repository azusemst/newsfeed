import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsFeed</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Feed</Link>
                    <Link className="nav-link" to="/edit">Edit</Link>
                </div>
            </div>
        </div>
    </nav>;
}

export default Nav;