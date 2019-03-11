import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div className="header">
        <div className="container header-wrapper">
            <div className="header_left">
                <Link to="/">Movies</Link>
                <Link to="/shows">Tv Shows</Link>
                <a href="/favorite">Favorites</a>
            </div>
            <div className="header_right">
                <input type="text" name="search" value={props.searchText} onChange={(e) => props.handleInput(e.target.value)} placeholder="Search Movies" />
            </div>
        </div>
    </div>
);

export default Header;