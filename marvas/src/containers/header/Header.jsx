import React, { useState } from 'react';
import './header.css';


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div>
        <h1>This is a header</h1>
        </div>
    )
}



export default Header;