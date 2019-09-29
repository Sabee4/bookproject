
import React from "react";
import DisplayBook from "./components/DisplayBook";
import {NavbarComponent} from "./components/NavbarComponent";
import "./App.css";

const App = () => (
  <section>
      <div class="container">
       <NavbarComponent />   
      <DisplayBook/>
    </div>
  </section>
);

export default App;
