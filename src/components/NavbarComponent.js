import React, { Component } from "react";

class NavbarComponent extends React.Component {
 
  render() {
    return (
      <React.Fragment>
     <nav class="navbar__nav">

     <ul class="navbar__ul">
  <li class="navbar__li"><a href="#">Link 1</a></li>
  <li class="navbar__li"><a href="#">Link 2</a></li>
  <li class="navbar__li"><a href="#">Link 3</a></li>
  
</ul>
     </nav>
            
      </React.Fragment>
    );
  }
}
 
export {NavbarComponent};