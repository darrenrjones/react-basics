'use strict';
import React from 'react';

import './Home.css'

export class Home extends React.Component {  

  // constructor(props) {
  //   super(); //execute parent constructor since inheritinf from React.Component
  //   this.age = props.age; //create new age prop
  //   this.name = props.name; //create new name prop
  // }
 constructor(props) {
    super(); //execute parent constructor since inheritinf from React.Component
    this.state = { // sets state
      age: props.initialAge, // DO NOT assign props to state except when it is initial value
      name: props.name
    }  }
  
  // prop: what you  pass into a component from outside of it
  // state: what happens in the component, not being changed from outside, triggered from inside

  onMakeOlder() {
    this.setState({ //setState will rerender, takes an object to change
      age: this.state.age + 3 // this.state refers to unchanged state      
    });  
    console.log(this.state.age);
  }

  onMakeLonger() {
    this.setState({
      name: this.state.name + 'abc'
    });
    console.log(this.name);
  }

  render() {
    const origName = this.state.name;
    return(
      <div className='paragraph-div'>
        <p>This is a paragraph in a new Component for {origName}!!!</p>    
        <p> Name: {this.state.name} <br></br>Age: {this.state.age}</p>              
        
        <button className='ageBtn' onClick={() => this.onMakeOlder()}>Make Me older!</button>
        <button className='nameBtn' onClick={() => this.onMakeLonger()}>Add to My name!</button>
        <hr/>
      </div>
      
    );
  }
}

// Home.propTypes = {
//   name: React.PropTypes.string,
//   age: React.PropTypes.number
// }