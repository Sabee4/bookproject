import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
 
 
export default class SearchComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {      
        search:' '
      };   
    }
    updateSearch(event){
      this.setState({search: event.target.value.substr(0,20)});  
      return this.state.search;
  } 
  render() {    
    let filteredBooks=this.state.books.filter(
        (item) =>{
                let SearchItem=this.state.search.toLowerCase().trim();       
                 if(item.author.toLowerCase().indexOf(SearchItem)!==-1){         
                  return item.author.toLowerCase().indexOf(SearchItem)!==-1;}           
                if(item.title.toLowerCase().indexOf(SearchItem)!==-1){          
                  return item.title.toLowerCase().indexOf(SearchItem)!==-1; }
                  } );  
    return (  
        <section class="book-list__padding">       
                  <div className="book-list__form-group">
                           <input type="text" 
                           className="book-list__search" 
                           placeholder="Search for Collection"                         
                           onChange={this.updateSearch.bind(this)}/> 
                </div> </section>
);
}
}