import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Player from './page/player';

class App extends Component {
  
  componentDidMount(){
    // document.getElementById('player').jPlayer({
    //   ready: function(){
    //     document.getElementById('player').jPlayer('setMedia',{
    //       mp3: '/static/media/test.mp3'
    //     }).jPlayer('play');
    //   },
    //   supplied: 'mp3',
    //   wmode: 'window'
    // });
    // document.getElementById('player').bind($.jPlayer.event.timeupdate, (e)=>{
    //   this.setState({
    //     progerss: Math.round(e.jPlayer.status.currentTime)
    //   });
    // });
  }
  componentWillUnMount(){
    //$('#jPlayer').unbind($.jPlayer.event.timeupdate);
  }
 
  render() {
    return (
      <div>
      <Header />
      <Player/>
      </div>
    );
  }
}

export default App;
