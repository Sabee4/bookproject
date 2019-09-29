import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
import filteredBooks from "./DisplayBook";
export default class BookFound extends Component {   
  render() {        
        return (   
            <section>  
                 <div class="paddingClass">      
                {this.props.filteredBooks.map(item => ( <Book key={item.id} info={item}  />  ))}                        
              </div>
            </section>
          );
    } 
  }
 
