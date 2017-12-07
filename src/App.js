import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'
import './App.css'
import './assets/css/common.css'
import './assets/css/reset.css'
import Header from './components/header'
import MusicListPage from './page/musiclist'
import Player from './components/player'
import PlayerPage from './page/playerpage'
import ControllBar from './components/controlbar'
class App extends Component {
  
  componentDidMount(){
    
  }
  componentWillUnMount(){
    
  }
 
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container center mt50">
            {/* <Header /> */}
            <Player />
            <PlayerPage />
            <ControllBar />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
