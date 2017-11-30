import React,{Component} from 'react';
import './musiclistitem.less';
class MusicListItem extends Component{
    static defaultProps = {
        title:'',
        artist:'',
    }
    render(){
        return (
            <li class="row components-musiclistitem">
            <p class="music-title">{this.props.data.title}<span class="music-artist"> - {this.props.data.artist}</span></p>
            </li>
        );
    }
}
export default MusicListItem;