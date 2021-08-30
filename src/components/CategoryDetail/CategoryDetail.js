import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './CategoryDetail.css'

const CategoryDetail = () => {

    const category = useContext(CategoryContext);

    return (
        <div>
            <h4>This is category detail</h4>
            <h6>Selected category: {category}</h6>
        </div>
    );
};

export default CategoryDetail;