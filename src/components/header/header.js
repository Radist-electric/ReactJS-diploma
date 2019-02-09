import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <>
        <Link to='/'>Coffee house</Link>
        <Link to='/coffee/'>Our coffee</Link>
        <Link to='/pleasure/'>For your pleasure</Link>
        </>
    );
};

export default Header;