import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
import BookFound from "./BookFound";
import BookNotFound from "./BookNotFound";
export default class DisplayBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
      count:0,
      search:' '         
    };   
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});  
} 
  render() {     
   
    let filteredBooks=this.state.books.filter(
      (item) =>{
              let SearchItem=this.state.search.toLowerCase().trim();       
               if(item.author.toLowerCase().indexOf(SearchItem)!==-1){         
                return item.author.toLowerCase().indexOf(SearchItem)!==-1;}           
              if( item.title.toLowerCase().indexOf(SearchItem)!==-1){          
                return item.title.toLowerCase().indexOf(SearchItem)!==-1; }
                } );  

    if( filteredBooks.length==0){
        return (   
            <section>
               <div class="paddingClass">                   
               <div className="form-group">
                           <input type="text" 
                           className="form-control" 
                           placeholder="Search for Collection"                         
                           onChange={this.updateSearch.bind(this)}/>
                           </div>    
                           <BookNotFound collectionbooks={this.state.books} searchItem={this.state.search} />  
          </div>
            </section>
          );
    }
    else{
        return (   
            <section>                
               <div class="paddingClass"> 
                 <div className="form-group">
                           <input type="text" 
                           className="form-control" 
                           placeholder="Search for Collection"                         
                           onChange={this.updateSearch.bind(this)}/>
                   </div>
                <BookFound filteredBooks={ filteredBooks } />  
              </div>
            </section>
          );
    }  
  }
}
