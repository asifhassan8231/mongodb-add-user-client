import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/home" style={{ marginRight: "20px" }}>Home</Link>
            <Link to="/users">Users</Link>
        </div>
    );
};

export default Header;