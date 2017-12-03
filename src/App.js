import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'
import './App.css'
import Header from './components/header'
import PlayerPage from './page/player'
import MusicListPage from './page/musiclist'
import Player from './components/player'
import ControlBar from './components/controlbar'
class App extends Component {
  
  componentDidMount(){

  }
  componentWillUnMount(){
    
  }
 
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container center">
            <Header />
            <Player />
            <Route exact path="/" component={PlayerPage} />
            <Route path="/musiclist" component={MusicListPage} />
            <ControlBar />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
