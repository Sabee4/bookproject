import React from 'react';
import booksData from "./bookData";
 

const AuthorComponent = ({ author }) => {     
    return (
        <h6> {author}</h6>
    );
};

export { AuthorComponent };