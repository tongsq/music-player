import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route,Link} from 'react-router-dom'
//import {withRouter,Redirect,BrowserRouter as Router,Link} from 'react-router-dom'

import './controlbar.less'
import {playPrev,playNext,togglePlay,togglePlayStyle,progressChange} from '../actions'
import musicLogo from '../assets/image/logo.png'
import {PlayProgress} from './progress'

class ControlItem extends Component{
    static defaultProps = {
        diyStyle: 'common-item',
        clickHandle: ()=>{}    
    }
    render(){
        return <li className={`iconfont_music click-item ${this.props.diyStyle}`} onClick={this.props.clickHandle}>{this.props.value}</li>
    }
}
class ShowListItem extends Component{
    constructor(props){
        super(props)
        this.showList = this.showList.bind(this)
    }
    showList(){
        if (this.props.match){
            this.props.history.goBack()
        }else{
            this.props.history.push("/musiclist")
        }
        
    }
    render(){
        let diyStyle = 'common-item'
        if (this.props.match)
            diyStyle = 'onhover'
        return(
            <ControlItem value="&#xe60d;" diyStyle={diyStyle} clickHandle={this.showList}/>
        )
    }
}

class ControlBar extends Component{
    constructor(props){
        super(props)
        this.keyEvent = this.keyEvent.bind(this)
    }
    componentDidMount(){
        window.addEventListener('keypress',this.keyEvent)
    }
    componentWillUnmount(){
        window.removeEventListener('keypress')
    }
    keyEvent(e){
        let keyCode = e.keyCode
        if (keyCode === 0){
            //空格
            this.props.togglePlay()
        }else if (keyCode === 39){
            //->
            this.props.playNext()
        }else if (keyCode === 37){
            //<-
            this.props.playPrev()
        }
    }
    render(){
        let playIcon = "\ue606"
        let diyStyle = "play-item-notactive"
        if (this.props.isPlay){
            playIcon = "\ue607"
            diyStyle = "play-item-active"
        }
        let playStyle = "\ue60b"
        if (this.props.playStyle === "single"){
            playStyle = "\ue60a"
        }else if(this.props.playStyle === "list"){
            playStyle = "\ue609"
        }
        return(
            <div>
                <PlayProgress
                progress={this.props.progress}
                onProgressChange={this.props.progressChange}
                isActive={this.props.isPlay ? true:false}
                duration={this.props.duration}
                />
                <div className="row components-controlbar">
                    <Link to="/player">
                    <div className="left-img">
                        <img src={musicLogo} alt=""/>
                    </div>
                    </Link>
                    <div className=""></div>
                    <ul className="control-part1 -col-auto">
                        <Route path="/musiclist" exact children={props=>(<ShowListItem {...props} />)}/>
                        <ControlItem value={playStyle} clickHandle={this.props.togglePlayStyle}/>
                    </ul>
                    <ul className="control-part2 -col-auto">
                        <ControlItem value="&#xe605;" clickHandle={this.props.playPrev}/>
                        <ControlItem value={playIcon} diyStyle={diyStyle} clickHandle={this.props.togglePlay}/>
                        <ControlItem value="&#xe608;" clickHandle={this.props.playNext}/>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    let {player} = state
    return{
        
        isPlay: player.isPlay,
        volume: player.volume,
        playStyle: player.playStyle,
        progress: player.progress,
        duration: player.duration,
		//changeProgressTo: player.changeProgressTo
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        playPrev,
        playNext,
        togglePlay,
        togglePlayStyle,
        progressChange
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);