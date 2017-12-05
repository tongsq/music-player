import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route} from 'react-router'

import ControllBar from '../components/controlbar'
import {PlayProgress} from '../components/progress'
import {progressChange} from '../actions'
import MusicListPage from './musiclist'
import './playerpage.less'

class PlayerPage extends Component{

    render(){
        return (
            <div>
                <div style={{height:"600px",background:"#806e98"}}>
                    <Route path="/musiclist" component={MusicListPage} />
                    <div className="row">
                    <div className="-col-auto cover">
              		<img src={this.props.currentItem.cover} alt={this.props.currentItem.title}/>
                	</div>
                    </div>
                </div>
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
    let {progress,currentItem} = state.player
    return{       
        progress,
        currentItem
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        progressChange
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);