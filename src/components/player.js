import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import {bindActionCreators} from 'redux';

import {updateProgressAction} from '../actions';
class Player extends Component{

	componentWillUpdate(newProps){
		console.log(newProps);
		if (newProps.changeProgressTo !== false){
			console.log(newProps.changeProgressTo);
			//选择播放进度
			this.refs.player.seekTo(newProps.changeProgressTo);
			//及时更新进度条显示
			this.props.onProgress({progress:newProps.changeProgressTo});
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
    	onProgress: updateProgressAction 
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);