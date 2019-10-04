import React, { Component } from "react";
import BookList from "./components/BookList";
import SearchComponent from "./components/SearchComponent";
import {NavbarComponent} from "./components/NavbarComponent";
import "./App.css";
export default class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {      
      search:' ' 
    };   
    
  }



render() {
 
  return(
  <section>  
    <div class="container">
    <NavbarComponent />    
    <SearchComponent/>   
    <BookList/> 
       </div>   
  </section>  

);
}
}
 
