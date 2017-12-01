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

export default Progress;