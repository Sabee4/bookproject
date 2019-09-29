import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
import filteredBooks from "./DisplayBook";
export default class BookNotFound extends Component {   
  render() {        
        return (   
            <section>  
                 <div class="paddingClass">  
                 <div class ="nobookfound"><h3> No Books found for "{this.props.searchItem}"</h3></div> 
                    <h3> This is our collection</h3> 
                       {this.props.collectionbooks.map(item => ( <Book key={item.id} info={item}  />  ))}   
                     
                              
              </div>
            </section>
          );
    } 
  }
 
