import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './Shipment.css'

const Shipment = () => {

    const [ category , setCategory ] = useContext(CategoryContext);

    return (
        <div>
            <h1>This is shipment: {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Increase</button>
        </div>
    );
};

export default Shipment;