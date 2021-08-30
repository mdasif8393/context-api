import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import './Categories.css'

const Categories = () => {


    return (
        <div>
            <h1>This is categories</h1>
            <CategoryDetail ></CategoryDetail>
        </div>
    );
};

export default Categories;