import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
import BookFound from "./BookFound";
import BookNotFound from "./BookNotFound";
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
      count:0,
      search:' ',
      filterValue:' '   
    };   
  }
  /*
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});  
} 

updateFilter(event){
  this.setState({filterValue: event.target.value});  
  console.log(event.target.value);
} */
  render() { 

    let filteredBooks=this.state.books.filter(
      (item) =>{
            //  let SearchItem=this.state.search.toLowerCase().trim();       
              let SearchItem=this.props.search.toLowerCase().trim();       
               if(item.author.toLowerCase().indexOf(SearchItem)!==-1){         
                return item.author.toLowerCase().indexOf(SearchItem)!==-1;}           
              if(item.title.toLowerCase().indexOf(SearchItem)!==-1){          
                return item.title.toLowerCase().indexOf(SearchItem)!==-1; }
                } ); 

                if( filteredBooks.length==0){    
                  return (   
                 
                       <BookNotFound collectionbooks={this.state.books} searchItem={this.state.search} />          
                     
                    );
                  }

                  else{
                    return (  
                  
            
                            <BookFound filteredBooks={ filteredBooks } />               
                       
                      );
                }  
              }
            
            }
            




/*
    let typeBooks=this.state.books.filter(
      (typeBooks_item) =>{
              let filterItem=this.state.filterValue.trim();     
             // console.log(filterItem);
            //   if(typeBooks_item.type.indexOf(filterItem)!==-1){  
                if(typeBooks_item.type===filterItem){    
                console.log(typeBooks_item +" and + " + typeBooks_item.type.indexOf(filterItem));
                return typeBooks_item.type.indexOf(filterItem)!==-1; 
                 } 
                });  
                
               
                let newBooks=this.state.books.filter(
                  (item) =>{
                          let filterItem=this.state.filterValue.trim();     
                          let SearchItem=this.state.search.toLowerCase().trim();      
                          console.log(filterItem);
                          console.log(SearchItem);
                        //   if(typeBooks_item.type.indexOf(filterItem)!==-1){  
                            if(item.type===filterItem){    
                              if(item.author.toLowerCase().indexOf(SearchItem)!==-1){         
                                return item.author.toLowerCase().indexOf(SearchItem)!==-1;}           
                              if(item.title.toLowerCase().indexOf(SearchItem)!==-1){          
                                return item.title.toLowerCase().indexOf(SearchItem)!==-1; }                             
                             }                               
                            });  
 
/*
                if(typeBooks.length!=0){                  
                  return (  
                    <section class="book-list__padding">       
                              <div className="book-list__form-group">
                                       <input type="text" 
                                       className="book-list__search" 
                                       placeholder="Search for Collection"                         
                                       onChange={this.updateSearch.bind(this)}/> 
            
                                        <select className="book-list__filter" onChange={this.updateFilter.bind(this)}>
                               <option value="Filter By">Filter By</option>
                               <option value="Children's Books">Children's Books</option>
                               <option value="Fiction">Fiction</option>
                              <option value="Non-Fiction">Non-Fiction</option>     
                            </select>                 
                               </div>    
                            <BookFound filteredBooks={ typeBooks } />               
                        </section>
                      );                
                
              }

              if(newBooks.length!=0){                  
                return (  
                  <section class="book-list__padding">       
                            <div className="book-list__form-group">
                                     <input type="text" 
                                     className="book-list__search" 
                                     placeholder="Search for Collection"                         
                                     onChange={this.updateSearch.bind(this)}/> 
          
                                      <select className="book-list__filter" onChange={this.updateFilter.bind(this)}>
                             <option value="Filter By">Filter By</option>
                             <option value="Children's Books">Children's Books</option>
                             <option value="Fiction">Fiction</option>
                            <option value="Non-Fiction">Non-Fiction</option>     
                          </select>                 
                             </div>    
                          <BookFound filteredBooks={ newBooks } />               
                      </section>
                    );     
                }
             */
//condition 1 search empty and filter empty -> display all
//condition 2: search empty.filter present->display only filter
//3: search present.filte absent->display only search
//4. both present :display using and

  //  if( filteredBooks.length==0){    
//console.log(filteredBooks.length+ "i am here");
      //if(typeBooks.length!=0){      
        /*            
        return (  
          <section class="book-list__padding">       
                    <div className="book-list__form-group">
                             <input type="text" 
                             className="book-list__search" 
                             placeholder="Search for Collection"                         
                             onChange={this.updateSearch.bind(this)}/> 
  
                              <select className="book-list__filter" onChange={this.updateFilter.bind(this)}>
                     <option value="Filter By">Filter By</option>
                     <option value="Children's Books">Children's Books</option>
                     <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>     
                  </select>                 
                     </div>    
                  <BookFound filteredBooks={ typeBooks } />               
              </section>
            );                
      
   // }
//else{*/
 
    //  }
 
   