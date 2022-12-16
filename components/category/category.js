import React from 'react';

const Category = (image, text) => {
    return (
        <div>
            <img src={image} alt={text}/>
            <p>{text}</p>
        </div>
    );
};

export default Category;