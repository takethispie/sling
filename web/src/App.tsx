import React, { Component } from 'react';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {Route} from "react-router";
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
