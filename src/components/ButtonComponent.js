import React from 'react';
import booksData from "./bookData";
 
/*
class ButtonComponent extends React.Component {
    constructor(props) {
      super(props);
      this.functionPassed = this.functionPassed.bind(this);
    }
    functionPassed () {
      // do something
      this.props.sendFunction();
      
    }
    render () {
      return (
        //something
        <button type="button" onClick={this.addCount}>  +   </button>
        
      );
    }
  }
*/
  class ButtonComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0    
      };  
      // This binding is necessary to make `this` work in the callback
      //this.functionName = this.functionName.bind(this);     
      this.addCount = this.addCount.bind(this);
      this.lowerCount = this.lowerCount.bind(this);
      this.resetCount = this.resetCount.bind(this);
    } 
   
    addCount = () => {
        this.setState({ count: this.state.count + 1 });
      };
      lowerCount = () => {
         //count should not be negative.check count
        this.state.count<=0?(this.setState({ count: 0 })):this.setState({ count: this.state.count - 1 })
        
      };
      resetCount = () => {
        this.setState({ count: 0 });
      };
  
    render() {
      return (
          <div>
          {this.state.count<=0 ? ( <h3> </h3>):( this.state.count>1?<h5>{this.state.count} books added</h5>:<h5>{this.state.count} book added</h5>)}               
         <button type="button" onClick={this.addCount}>  +   </button>
          <button type="button" onClick={this.resetCount}> reset  </button>
          <button type="button" onClick={this.lowerCount}>  -  </button>      
        </div>
      );
    }
  }

  export { ButtonComponent };
 