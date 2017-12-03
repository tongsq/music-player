import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './musiclistitem.less';
import {playItem} from '../actions';
const MusicListItemTitle = (props)=>{
    return (
        <p className={`music-title ${props.active ? 'active':''}`} onClick={props.playItem}>{props.title}<span className="music-artist"> - {props.artist}</span></p>
        );
}
class MusicListItem extends Component{
    static defaultProps = {
        item:{},
    }
    
    render(){
        return (
            <li className="row components-musiclistitem">
            <MusicListItemTitle 
                title={this.props.item.title} 
                artist={this.props.item.artist} 
                playItem={()=>this.props.playItem(this.props.item)}
                active={this.props.item===this.props.currentItem}/>
            </li>
        );
    }
}
const mapStateToProps = state =>{
    let {player} = state
    return{
        currentItem: player.currentItem
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({playItem}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MusicListItem);