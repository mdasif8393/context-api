import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';
import './Header.css'

const Header = () => {

    const [ category, setCategory ] = useContext(CategoryContext);

    return (
        <div>
            <h1>This is Header: {category}</h1>
            <button onClick={ () => setCategory( category + 1 ) } >Increase</button>
        </div>
    );
};

export default Header;