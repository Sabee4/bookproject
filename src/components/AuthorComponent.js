import React from 'react';
import booksData from "./bookData";
 

const AuthorComponent = ({ author }) => {
     
    return (
        <h6>Author : {author}</h6>
    );
};

export { AuthorComponent };