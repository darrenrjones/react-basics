'use strict';
import React from 'react';

import './Home.css'

export class Home extends React.Component {  
  render() {
    let randomText = 'This is from within home class in home.js: ';
    return(
      <div className='paragraph-div'>
        <p>This is a paragraph in a new Component!!!</p>
        {randomText}{this.props.name}
        <div className='user-div'>
          <h3>User obj from index.js written from Home.js: </h3>
          <h5> Name: {this.props.user.name} <br></br>Age: {this.props.user.age}</h5>
          <h5>Hobbies:</h5>
          <ul>
            {this.props.user.hobbies.map((hob,i) => <li className={i} key={i}>{hob}</li> )}
          </ul>
        </div>
      </div>
      
    );
  }
}
