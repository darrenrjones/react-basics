'use strict';

import React from 'react';
import { render } from 'react-dom';

import './index.css';

import { Header } from './components/Header';
import { Home } from './components/Home';



class App extends React.Component {
  render() {
    let user = {
      name:"Darren",
      age: 31,
      hobbies: ['sports','video games','coding','hiking']
    };
    return (
      <div className='container'>

        <div className='row'>
          <div className='header-in-row'>
            <Header/>
          </div>
        </div>

        <p>A random paragraph here</p>

        <div className='row'>
          <div className='home-in-row'>
            <Home name={'homepage'} age={31} user={user}/>
          </div>
        </div>

      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));