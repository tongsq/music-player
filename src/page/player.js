import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Progress from '../components/progress';
import './player.less';
import MusicList from '../config/config';
import { Link } from 'react-router-dom';
class Player extends Component{
    static defaultProps = {
        
    }
    constructor(props){
        super(props);
        this.state = {
          progerss: 0,
          volume: 50,
          isPlay: false,
          currentMusitItem: MusicList[0],
          musicIndex: 0
        }
        this.onProgress = this.onProgress.bind(this);
        this.progressChangeHandler = this.progressChangeHandler.bind(this);
        this.changeVolumeHandler = this.changeVolumeHandler.bind(this);
        this.play = this.play.bind(this);
      }
      onProgress(options){
        this.setState({
          progress: Math.round(options.played * 10000) / 100
        });
        
      }
      componentDidMount(){
        
      }
      componentWillUnMount(){
        
      }
      progressChangeHandler(progress) {
        this.refs.player.seekTo(progress);
        this.onProgress({played:progress});
      }
      changeVolumeHandler(progress){
        this.setState({volume:Math.round(progress * 10000) / 100});
      }
      play(){
        this.setState({isPlay:!this.state.isPlay});
      }
      next(){
        let count = MusicList.length;
        let newIndex = this.state.musicIndex + 1;
        if (newIndex >= count)
            newIndex = 0
        this.setState({musicIndex:newIndex,currentMusitItem:MusicList[newIndex]});
      }
      prev(){
        let count = MusicList.length;
        let newIndex = this.state.musicIndex - 1;
        if (newIndex < 0 )
            newIndex = count-1
        this.setState({musicIndex:newIndex,currentMusitItem:MusicList[newIndex]});
      }
      render() {
        return (
            <div className="player-page">
                <ReactPlayer url={this.state.currentMusitItem.file} playing={this.state.isPlay} 
                onProgress={this.onProgress}
                width="0"
                height="0"
                ref="player"
                volume={this.state.volume/100}
                />
                <h1 className="caption"><Link to="/musiclist">我的私人音乐坊 &gt;</Link></h1>
                <div className="mt20 row">
                	<div className="controll-wrapper">
                		<h2 className="music-title">{this.state.currentMusitItem.title}</h2>
                		<h3 className="music-artist mt10">{this.state.currentMusitItem.artist}</h3>
                		<div className="row mt20">
                			<div className="left-time -col-auto">-{this.state.leftTime}</div>
                			<div className="volume-container">
                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                				<div className="volume-wrapper">
					                <Progress
										progress={this.state.volume}
										onProgressChange={this.changeVolumeHandler}
									
					                >
					                </Progress>
                				</div>
                			</div>
                		</div>
                		<div style={{height: 10, lineHeight: '10px', marginTop:'20px'}}>
			                <Progress
								progress={this.state.progress}
								onProgressChange={this.progressChangeHandler}
			                >
			                </Progress>
                		</div>
                		<div className="mt35 row">
                			<div>
	                			<i className="icon prev" onClick={()=>this.prev()}></i>
	                			<i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
	                			<i className="icon next ml20" onClick={()=>this.next()}></i>
                			</div>
                			<div className="-col-auto">
                				<i className={`icon repeat-${this.props.repeatType}`} onClick={this.changeRepeat}></i>
                			</div>
                		</div>
                	</div>
                	<div className="-col-auto cover">
                		<img src={this.state.currentMusitItem.cover} alt={this.state.currentMusitItem.title}/>
                	</div>
                </div>
            </div>
        );
      }
}
export default Player;