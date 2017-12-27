import React,{Component} from 'react'
import './progress.less'

class Progress extends Component{
    static defaultProps = {
        barColor: '#2f9842'
    }
    constructor(props){
        super(props);
        this.changeProgress = this.changeProgress.bind(this);
    }
    
    changeProgress(e){

        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        
        this.props.onProgressChange(progress);
    }
    render() {
        return (
            <div className="components-progress" ref="progressBar" onClick={this.changeProgress}>
                <div className="progress" style={{width:`${this.props.progress}%`,background:`${this.props.barColor}`}}
                ></div>
            </div>
        );
    }
}
export class PlayProgress extends Component{
    static defaultProps = {
        isActive: false,
        showTransition: true,
    }
    constructor(props){
        super(props)
        this.state = {showTime: false}
        this.changeProgress = this.changeProgress.bind(this)
        this.showPlayTime = this.showPlayTime.bind(this)
        this.hidePlayTime = this.hidePlayTime.bind(this)
    }
    componentWillReceiveProps(newProps){
        let change = newProps.progress - this.props.progress
        if ((change < 0 || change > 2) &&　this.state.showTransition){
            this.setState({showTransition: false})
        }else if(!this.state.showTransition){
            this.setState({showTransition: true})
        }
    }
    changeProgress(e){
        let progressBar = this.refs.progressBar
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth
        this.props.onProgressChange(progress.toFixed(4))
    }
    showPlayTime(){
        this.setState({showTime:true})
    }
    hidePlayTime(){
        this.setState({showTime:false})
    }
    render() {
        let {progress,duration} = this.props
        let timeBoxStyle = {opacity: 0}
        if (progress < 50){
            timeBoxStyle.left = progress + '%'
        }else{
            timeBoxStyle.right = 100-progress + '%'
        }
        if (this.state.showTime){
            timeBoxStyle.opacity = 1
        }
        let timeMsg = getTimeMsg(duration, progress)
        let progressStyle = {width:`${this.props.progress}%`}
        if (this.state.showTransition){
            progressStyle.transition = "width 1s linear"
        }
        return (
            <div className="components-playprogress-body" ref="progressBar" 
                 onClick={this.changeProgress} 
                 onMouseOver={this.showPlayTime} 
                 onMouseOut={this.hidePlayTime}>
                <div className="components-playprogress">
                    <div className="progress" style={progressStyle}>
                        <i className={this.props.isActive? "active":""}></i>
                    </div>
                </div>
                <div className="time-box" style={timeBoxStyle}>{timeMsg}</div>
            </div>
        );
    }
}
function getTimeMsg(duration, progress){
    let played = progress * duration / 100
    let playedM =  Math.floor(played / 60)
    let playedS = Math.floor(played % 60)
    let totalM = Math.floor(duration / 60)
    let totalS = Math.floor(duration % 60)
    if (isNaN(playedM) || isNaN(playedS) || isNaN(totalM) || isNaN(totalS)){
        return "---:---"
    }
    return `${playedM}:${playedS}/${totalM}:${totalS}`
}
export default Progress;
