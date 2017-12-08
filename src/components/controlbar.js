import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route} from 'react-router'
//import {withRouter,Redirect,BrowserRouter as Router,Link} from 'react-router-dom'

import './controlbar.less'
import {playPrev,playNext,togglePlay,togglePlayStyle} from '../actions'
import musicLogo from '../assets/image/logo.png'

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
        console.log(this.props)
        if (this.props.location.pathname !== "/musiclist"){
            this.props.history.push("/musiclist")
        }else{
            this.props.history.goBack()
        }
        
    }
    render(){
        return(
            <ControlItem value="&#xe60d;" clickHandle={this.showList}/>
        )
    }
}

class ControlBar extends Component{
    
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
            <div className="row components-controlbar">
                <div className="left-img">
                    <img src={musicLogo} alt=""/>
                </div>
                <div className=""></div>
                <ul className="control-part1 -col-auto">
                    <Route path="/" children={props=>(<ShowListItem {...props} />)}/>
                    <ControlItem value={playStyle} clickHandle={this.props.togglePlayStyle}/>
                </ul>
                <ul className="control-part2 -col-auto">
                    <ControlItem value="&#xe605;" clickHandle={this.props.playPrev}/>
                    <ControlItem value={playIcon} diyStyle={diyStyle} clickHandle={this.props.togglePlay}/>
                    <ControlItem value="&#xe608;" clickHandle={this.props.playNext}/>
                </ul>
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
		//changeProgressTo: player.changeProgressTo
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        playPrev,
        playNext,
        togglePlay,
        togglePlayStyle
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);