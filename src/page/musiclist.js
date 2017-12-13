import React,{Component} from 'react';
import {connect} from 'react-redux';

import MusicListItem from '../components/musiclistitem';
import './musiclist.less';

class MusicList extends Component{
    constructor(props){
    	super(props)
    	this.state = {
    		opacity: 0
    	}
    }
    componentDidMount(){
    	this.setState({opacity:1})
    }
    render(){
	    return (
            <div style={{background:'#fff'}}>
    	        <ul className="musiclist-page" style={{opacity:this.state.opacity}}>
    	            {this.props.MusicListData.map((item,index)=><MusicListItem item={item} key={index}/>)}
    	        </ul>
            </div>
	    );
    }
}
const mapStateToProps = state =>{
    return {MusicListData: state.player.musicList}
}
export default connect(mapStateToProps)(MusicList);