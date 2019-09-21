import React from 'react';
import booksData from "./bookData";
 

const TitleComponent = ({ title }) => {
     
    return (
        <h4>Title : {title}</h4>
    );
};

export { TitleComponent };