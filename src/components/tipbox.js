import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Transition from 'react-transition-group/Transition'

import './tipbox.less'
import {showTipSucc} from '../actions'
class TipBox extends Component{
	static defaultProps = {
		tipMsg: false
	}
	constructor(props){
		super(props)
		this.state = {in: false}
	}
	componentWillReceiveProps(newProp){
		if (newProp.tipMsg && newProp.tipMsg !== this.props.tipMsg){
			this.showTip(newProp.tipMsg)
			this.setState({in: true})
		}else{
			this.setState({in: false})
		}
	}
	componentDidUpdate(){
		// let tipContent = this.refs.tipContent
		// if (this.props.tipMsg)
		// 	tipContent.className = tipContent.className + ' hide'
		
		
	}
	showTip(tipMsg){
		setTimeout(()=>{
			this.props.showTipSucc(tipMsg)
		},1000)
	}
	render(){
		const defaultStyle = {
			transition: 'opacity 1s ease-in-out',
			opacity: 0
		}
		const transitionStyles = {
			entering: {opacity: 1},
			entered: {opacity: 0}
		}
		return(
			<div className={`components-tipbox center2 ${this.props.tipMsg?'show':'notshow'}`}>
				<Transition in={this.state.in} timeout={0}>
					{(state) =>(
						<p className='content'
							style={{
					        ...defaultStyle,
					        ...transitionStyles[state]
					      }}>
							{this.props.tipMsg}
						</p>
					)}
				</Transition>
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