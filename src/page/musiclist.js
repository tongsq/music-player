import React,{Component} from 'react';
//import {connect} from 'react-redux';

import MusicListItem from '../components/musiclistitem';
import './musiclist.less';
import MusicListData from '../config/config';
class MusicList extends Component{
    render(){
        return (
            <ul className="musiclist-page">
                {MusicListData.map((item,index)=><MusicListItem item={item} key={index}/>)}
            </ul>
        );
    }
}
export default MusicList;