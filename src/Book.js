import React, { Component } from "react";
import { TitleComponent } from './TitleComponent';
 
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0    
    };
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
    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <TitleComponent title={title}/>         
          
           {this.state.count<=0 ? ( <h3> </h3>):( this.state.count>1?<h5>{this.state.count} books added</h5>:<h5>{this.state.count} book added</h5>)}
        
          <button type="button" onClick={this.addCount}>
            +
          </button>
          <button type="button" onClick={this.resetCount}>
            reset
          </button>
          <button type="button" onClick={this.lowerCount}>
            -
          </button>
        </div> 
      </article>
    
    );
  }
}
