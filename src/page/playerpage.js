import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route} from 'react-router'

import {PlayProgress} from '../components/progress'
import {progressChange} from '../actions'
import MusicListPage from './musiclist'
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
class PlayerPage extends Component{

    render(){
        return (
            <div className="playerpage-container">
                <div className="glass"></div>
                    <div className="playerpage">
                        <div className="row">
                        <div className="-col-auto cover">
                  		<CoverImg src={this.props.currentItem.cover} alt={this.props.currentItem.title} isActive={this.props.isPlay}/>
                    	</div>
                        </div>
                    </div>
                    <PlayProgress
    					progress={this.props.progress}
                        onProgressChange={this.props.progressChange}
                        isActive={this.props.isPlay ? true:false}
    		        />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    let {progress,currentItem,isPlay} = state.player
    return{       
        progress,
        currentItem,
        isPlay
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        progressChange
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);