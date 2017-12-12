import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './tipbox.less'
import {showTipSucc} from '../actions'
class TipBox extends Component{
	static defaultProps = {
		tipMsg: false
	}
	componentWillReceiveProps(newProp){
		if (newProp.tipMsg){
			this.showTip(newProp.tipMsg)
		}
	}
	showTip(tipMsg){
		setTimeout(()=>{
			this.props.showTipSucc(tipMsg)
		},1000)
	}
	render(){
		let style = {}
		if (!this.props.tipMsg){
			style.opacity = 0
		}
		return(
			<div className={`components-tipbox center2 ${this.props.tipMsg?'':'notshow'}`}>
				<p className="content">
					{this.props.tipMsg}
				</p>
			</div>
		)
	}
}
const mapStateToProps = state =>{
    let {sys} = state
    return{
        tipMsg: sys.tipMsg,
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        showTipSucc
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TipBox)