import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Player from './page/player';
import MusicListPage from './page/musiclist';

class App extends Component {
  
  componentDidMount(){

  }
  componentWillUnMount(){
    
  }
 
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Player} />
          <Route path="/musiclist" component={MusicListPage} />
         
        </div>
      </Router>
    );
  }
}

export default App;
