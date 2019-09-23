import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
 
export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
      count:0
    };
  }

  render() {
    return (
      <section>
        
        <div class="paddingClass">
        <h3>This is our Booklist</h3>
        {this.state.books.map(item => (
          <Book key={item.id} info={item}  />
        ))}
        </div>
       
      </section>
    );
  }
}
