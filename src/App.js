import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import Menu from './components/Menu';
import Home from './components/Home';
import Products from './components/Products';
import Access from './components/Access';

function App(){
  return(
    <div>
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/Products' component = {Products} />
        <Route exact path='/Access' component = {Access} />
      </Switch>
    </Router>
    </div>
  );
  
}


export default App;