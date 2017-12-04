import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ControllBar from '../components/controlbar'
import {PlayProgress} from '../components/progress'
import {progressChange} from '../actions'

class PlayerPage extends Component{

    render(){
        return (
            <div style={{marginTop:"100px"}}>
                <div style={{height:"50px",background:"#806e98"}}></div>
                <PlayProgress
					progress={this.props.progress}
                    onProgressChange={this.props.progressChange}
		        />
                <div style={{marginTop: "0px"}}>
                <ControllBar />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    let {progress} = state.player
    return{       
        progress
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        progressChange
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);