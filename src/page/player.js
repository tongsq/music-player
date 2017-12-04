import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Progress from '../components/progress';
import './player.less';
import { Link } from 'react-router-dom';
import {playNext,playPrev,togglePlay, progressChange,volumeChange} from '../actions'
class PlayerPage extends Component{
    static defaultProps = {
        
    }
    
    render() {
      return (
          <div className="player-page">
              <h1 className="caption"><Link to="/musiclist">我的私人音乐坊 &gt;</Link></h1>
              <div className="mt20 row">
              	<div className="controll-wrapper">
              		<h2 className="music-title">{this.props.currentItem.title}</h2>
              		<h3 className="music-artist mt10">{this.props.currentItem.artist}</h3>
              		<div className="row mt20">
              			<div className="left-time -col-auto">-{"leftTime"}</div>
              			<div className="volume-container">
              				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
              				<div className="volume-wrapper">
				                <Progress
									progress={this.props.volume}
									onProgressChange={this.props.volumeChangeHandler}
								
				                >
				                </Progress>
              				</div>
              			</div>
              		</div>
              		<div style={{height: 10, lineHeight: '10px', marginTop:'20px'}}>
		                <Progress
							progress={this.props.progress}
							onProgressChange={this.props.progressChangeHandler}
		                >
		                </Progress>
              		</div>
              		<div className="mt35 row">
              			
              		</div>
              	</div>
              	<div className="-col-auto cover">
              		<img src={this.props.currentItem.cover} alt={this.props.currentItem.title}/>
              	</div>
              </div>
          </div>
      );
    }
}

const mapStateToProps = state =>{
    let {player} = state
    return{
        progress: player.progress,
        volume: player.volume,
        isPlay: player.isPlay,
        currentItem: player.currentItem
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
      playNext,
      playPrev,
      togglePlay,
      progressChangeHandler: progressChange,
      volumeChangeHandler: volumeChange
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);