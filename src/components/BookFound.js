import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
import filteredBooks from "./BookList";
export default class BookFound extends Component {   
  render() {        
        return (   

          <section class="book-list__padding">     
                {this.props.filteredBooks.map(item => ( <Book key={item.id} info={item}  />  ))}     
            </section>
          );
    } 
  }
 
