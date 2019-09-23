// state, this.setState = hold/access/change data of component
// props = read only

import React from "react";
import Booklist from "./components/Booklist";
import {NavbarComponent} from "./components/NavbarComponent";

import "./App.css";
const App = () => (
  <section>
      <div class="container">
      <NavbarComponent />    
    <Booklist />
    </div>
  </section>
);

export default App;
