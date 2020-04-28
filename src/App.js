import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepages.jsx';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';


function App() {
  return (
    <div>
      <Header />
      <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ShopPage} />
       
       </Switch>
    </div>
  );
}

export default App;
