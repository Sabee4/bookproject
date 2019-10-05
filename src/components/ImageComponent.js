import React from 'react';
import booksData from "./bookData";
 

const ImageComponent = ({ img }) => {     
    return (         
        <img src={img} width="150" alt="book" />
    );
};

export { ImageComponent };