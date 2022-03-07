import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Access from './components/Access';
import Footer from './components/Footer';

function App(){
  return(
    <div>
    <Router>
      <Header />
      <Menu />
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/About' component = {About} />
        {/*<Route exact path='/Products' component = {Products} />*/}
        <Route exact path='/Access' component = {Access} />
        
      </Switch>
      <Footer />
    </Router>
    </div>
  );
  
}


export default App;