
import React from "react";
import BookList from "./components/BookList";
import {NavbarComponent} from "./components/NavbarComponent";
import "./App.css";

const App = () => (
  <section>  
    <div class="container">
    <NavbarComponent />   
      <BookList/>    </div>   
  </section>
    
     
);

export default App;
