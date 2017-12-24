import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {progressChange} from '../actions'
import './playerpage.less'
import errorImg from '../assets/image/logo.png'

class CoverImg extends Component{
    static defaultProps = {
        src: '',
        alt: '',
        isActive: false
    }
    constructor(props){
        super(props)
        this.state = {
            src: props.src
        }
        this.onLoadError = this.onLoadError.bind(this)
    }
    componentWillReceiveProps(newProps){
        if (this.props.src !== newProps.src){
            this.setState({src:newProps.src})
        }
    }
    onLoadError() {
        this.setState({
            src: errorImg
        })
    }
    render(){
        return(
            <img src={this.state.src} alt={this.props.alt} onError={this.onLoadError} className={this.props.isActive? "active":""}/>
        )
    }
}
class MusicInfo extends Component{
    render(){
        return (
            <div>
                <h2 className="music-title">{this.props.title}</h2>
                <h3 className="music-artist">{this.props.artist}</h3>
            </div>
        )
    }
}
class PlayerPage extends Component{
    constructor(props){
        super(props)
        this.state = {showCoverTransition: false}
    }
    componentWillReceiveProps(newProps){
        if (((this.props.duration * (newProps.progress - this.props.progress)) > 110 || newProps.progress === 0) && this.state.showCoverTransition){        
            this.setState({showCoverTransition: false})
        }else if((this.props.progress !== newProps.progress) && !this.state.showCoverTransition){
            this.setState({showCoverTransition: true})
        }
    }
    render(){
        //背景图片
        let containerStyle = {background:`#f5f5f5 url('${this.props.currentItem.cover}')`}
        //当前播放图片
        let deg = ((this.props.duration * this.props.progress / 100)) * 12 
        if (isNaN(deg))
            deg = 0
        let coverStyle = {transform:`rotate(${deg}deg)`}
        let coverClass = "-col-auto cover"
        if (this.state.showCoverTransition)
            coverClass = "-col-auto cover active"
        return ( 
            <div className="playerpage-container" style={{...containerStyle}}>
                <div className="glass"></div>
                <div className="playerpage">
                    <div className="row">
                        <div className={coverClass} style={{...coverStyle}}>
                  		    <CoverImg src={this.props.currentItem.cover} alt={this.props.currentItem.title}/>
                        </div>
                        <div className="music-info">
                            <MusicInfo 
                                title={this.props.currentItem.title}
                                artist={this.props.currentItem.artist}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    let {progress,currentItem,isPlay,duration} = state.player
    return{       
        progress,
        currentItem,
        isPlay,
        duration
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        progressChange
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);