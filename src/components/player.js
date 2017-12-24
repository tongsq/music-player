import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import {bindActionCreators} from 'redux';

import {updateProgress,changeProgressSucc,playNext,setDuration} from '../actions';
class Player extends Component{
	constructor(props){
		super(props)
		this.onReady = this.onReady.bind(this)
	}
	componentWillReceiveProps(newProps){
		
		if (newProps.changeProgressTo !== false){
			//选择播放进度
			let changeTo = newProps.changeProgressTo
			let player = this.refs.player
			if ((changeTo>=0) && (changeTo <=1)){
				let duration = player.getDuration();
				if (duration){
					player.seekTo(changeTo);
					this.props.changeProgressSucc();
				}
			}
		}
		
	}
	onReady(){
		let player = this.refs.player
		let duration = player.getDuration()
		this.props.setDuration(duration)
		if (this.props.changeProgressTo !== false){
			player.seekTo(this.props.changeProgressTo)
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
					onReady={this.onReady}
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
		playNext,
		setDuration
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);