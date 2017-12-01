import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './musiclistitem.less';
import {playItemAction} from '../actions';
const MusicListItemTitle = (props)=>{
    return (
        <p className="music-title" onClick={props.playItem}>{props.title}<span className="music-artist"> - {props.artist}</span></p>
        );
}
class MusicListItem extends Component{
    static defaultProps = {
        item:{},
    }
    
    render(){
        return (
            <li className={`row components-musiclistitem ${this.props.item===this.props.currentItem ? 'active':''}`}>
            <MusicListItemTitle title={this.props.item.title} artist={this.props.item.artist} playItem={()=>this.props.playItem(this.props.item)}/>
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
    // return{
    //     playItem: item =>{
    //         dispatch(playItemAction(item))
    //     }
    // }
    return bindActionCreators({playItem:playItemAction}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MusicListItem);