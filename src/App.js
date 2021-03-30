import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import './App.css';
import HomePage from './screens/HomePage'
import StocksPage from './screens/StocksPage'
import IndexesPage from './screens/IndexesPage'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/stocks" component={StocksPage}/>
          <Route path="/indexes" component={IndexesPage} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
