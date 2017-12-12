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
        isActive: false
    }
    constructor(props){
        super(props)
        this.state = {showTime: false}
        this.changeProgress = this.changeProgress.bind(this)
        this.showPlayTime = this.showPlayTime.bind(this)
        this.hidePlayTime = this.hidePlayTime.bind(this)
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
        let {progress} = this.props
        let timeBoxStyle = {opacity: 0}
        if (progress < 50){
            timeBoxStyle.left = progress + '%'
        }else{
            timeBoxStyle.right = 100-progress + '%'
        }
        if (this.state.showTime){
            timeBoxStyle.opacity = 1
        }
        return (
            <div className="components-playprogress-body" ref="progressBar" 
                 onClick={this.changeProgress} 
                 onMouseOver={this.showPlayTime} 
                 onMouseOut={this.hidePlayTime}>
                <div className="components-playprogress">
                    <div className="progress" style={{width:`${this.props.progress}%`}}>
                        <i className={this.props.isActive? "active":""}></i>
                    </div>
                </div>
                <div className="time-box" style={timeBoxStyle}>00:58/04:00</div>
            </div>
        );
    }
}

export default Progress;