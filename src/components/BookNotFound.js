import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
import filteredBooks from "./BookList";
//"{this.props.searchItem}"
export default class BookNotFound extends Component {   
  render() {        
        return (   
          <section class="book-list__padding">                  
                 <div class ="book-list__nobookfound"><h3> No Books found for </h3></div> 
                    <h3> This is our collection</h3> 
                       {this.props.collectionbooks.map(item => ( <Book key={item.id} info={item}  />  ))}   
            </section>
          );
    } 
  }
 
