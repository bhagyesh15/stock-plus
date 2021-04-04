import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import './App.css';
import NavigationBar from './components/Navigationbar';
import HomePage from './screens/HomePage'
import StocksPage from './screens/StocksPage'
import IndexesPage from './screens/IndexesPage'
import AboutPage from './screens/AboutPage';
import StockChartPage from './screens/StockChartPage';
import ExpPage from './screens/ExpPage';
import CryptoPage from './screens/CryptoPage';
require('dotenv').config();
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route path="/exp" component={ExpPage} />
          <Route path="/stocks" component={StocksPage} />
          <Route path="/stock/:symbol" component={StockChartPage} />
          <Route path="/indexes" component={IndexesPage} /> 
          <Route path="/about" component={AboutPage} />
          <Route path="/crypto" component={CryptoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
