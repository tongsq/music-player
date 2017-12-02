import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import {bindActionCreators} from 'redux';

import {updateProgressAction,changeProgressSuccAction} from '../actions';
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
		return (
			<div>
				<ReactPlayer 
					url={this.props.currentItem.file} 
					playing={this.props.isPlay} 
	                onProgress={this.props.onProgress}
	                width="0"
	                height="0"
	                volume={this.props.volume/100}
	                ref="player"
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
		changeProgressTo: player.changeProgressTo
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
		onProgress: updateProgressAction,
		changeProgressSucc: changeProgressSuccAction 
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);