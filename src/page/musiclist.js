import React,{Component} from 'react';

import MusicListItem from '../components/musiclistitem';
import './musiclist.less';
import MusicListData from '../config/config';
class MusicList extends Component{
    render(){
        return (
            <ul className="musiclist-page">
                {MusicListData.map(item=><MusicListItem data={item} />)}
            </ul>
        );
    }
}
export default MusicList;