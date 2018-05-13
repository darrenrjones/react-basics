'use strict';

import React from 'react';
import { render } from 'react-dom';

import './index.css';

import { Header } from './components/Header';
import { Home } from './components/Home';



class App extends React.Component {
  render() {

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
            <Home name={'Darren'} initialAge={31}/>
            <Home name={'Amelia'} initialAge={1}/>
            <Home name={'Veronica'} initialAge={30}/>

          </div>
        </div>

      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));