import React from 'react';
import {connect} from 'react-redux';

import MusicListItem from '../components/musiclistitem';
import './musiclist.less';

const MusicList = (props) => {
    
    return (
        <ul className="musiclist-page">
            {props.MusicListData.map((item,index)=><MusicListItem item={item} key={index}/>)}
        </ul>
    );
}
const mapStateToProps = state =>{
    return {MusicListData: state.player.musicList}
}
export default connect(mapStateToProps)(MusicList);