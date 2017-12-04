import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import {bindActionCreators} from 'redux';

import {updateProgress,changeProgressSucc,playNext} from '../actions';
class Player extends Component{

	componentWillReceiveProps(newProps){

		if (newProps.changeProgressTo !== false){
			
			//选择播放进度
			this.refs.player.seekTo(newProps.changeProgressTo);
			//更新完成
			this.props.changeProgressSucc();
		}
		
	}
	render(){
		let loop = false
		if (this.props.playStyle === 'single'){
			loop = true
		}
		return (
			<div>
				<ReactPlayer 
					url={this.props.currentItem.file} 
					playing={this.props.isPlay} 
	                onProgress={this.props.onProgress}
	                width="0"
	                height="0"
	                volume={this.props.volume/100}
	                muted={this.props.muted}
	                ref="player"
	                loop={loop}
	                onEnded={this.props.playNext}
	            />
   			</div>
			);
	}
}
const mapStateToProps = state =>{
    let {player} = state
    return{
        currentItem: player.currentItem,
        isPlay: player.isPlay,
        volume: player.volume,
		changeProgressTo: player.changeProgressTo,
		playStyle: player.playStyle,
		muted: player.muted
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
		onProgress: updateProgress,
		changeProgressSucc: changeProgressSucc,
		playNext
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);