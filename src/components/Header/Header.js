import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div className='header-container'>
                <div className="site-title">
                    <h2><span className='bike'>Dream</span> Bike</h2>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/blog">Blogs</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;