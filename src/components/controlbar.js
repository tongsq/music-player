import React,{Component} from 'react'
import './controlbar.less'

const ControlItem = props => {
    return <li className={`iconfont_music fs20 inline ${props.color}`}>{props.value}</li>
}
class ControlBar extends Component{

    render(){
        return(
            <div className="row components-controlbar">
                <div className=""></div>
                <ul className="control-part1 -col-auto">
                    <ControlItem value="&#xe60d;" />
                    <ControlItem value="&#xe60b;" />
                </ul>
                <ul className="control-part2 -col-auto">
                    <ControlItem value="&#xe605;" />
                    <ControlItem value="&#xe607;" color="dark"/>
                    <ControlItem value="&#xe608;" />
                </ul>
            </div>
        );
    }
}
export default ControlBar;