import musicList from '../config/musiclist'

const initialState = {
	currentItem: musicList[0],
	musicList:musicList,
	isPlay:false,
	progress:0,
	volume:50,
	changeProgressTo:false,
	playStyle:"rand",
	muted:false
}
export default (state = initialState, action)=>{
	if (action.type === 'updateProgress'){
		return {...state, progress:action.progress}
	}else if(action.type === 'playNext'){
		let index = findIndex(state.musicList, state.currentItem)
		let length = state.musicList.length
		let newIndex = index
		if (state.playStyle === "list"){
			//列表循环
			newIndex = (index + 1) % length
		}else{
			//随机播放
			if (length>1 && state.playStyle === "rand"){
				while(newIndex === index || newIndex === length){
					newIndex = Math.floor(Math.random() * length)
				}
			}
		}
		let result = {...state, currentItem:state.musicList[newIndex], progress:0}
		if (index === newIndex){
			result.changeProgressTo = 0;
		}
		return result
	}else if(action.type === 'playPrev'){
		let index = findIndex(state.musicList, state.currentItem)
		let length = state.musicList.length
		let newIndex = index
		if (state.playStyle === "list"){
			newIndex = (index - 1 + length) % length
		}else{
			//随机播放
			if (length>1 && state.playStyle === "rand"){
				while(newIndex === index || newIndex === length){
					newIndex = Math.floor(Math.random() * length)
				}
			}
		}
		let result =  {...state, currentItem:state.musicList[newIndex], progress:0}
		if (index === newIndex){
			result.changeProgressTo = 0
		}
		return result
	}else if(action.type === 'playItem'){
		return {...state, currentItem:action.item, isPlay: true, progress:0}
	}
	else if(action.type === 'togglePlay'){
		return {...state, isPlay: !state.isPlay}
	}
	else if(action.type === 'volumeChange'){
		return {...state, volume:action.volume}
	}
	else if(action.type === 'progressChange'){
		return {...state, changeProgressTo:action.changeProgressTo, progress:action.changeProgressTo * 100, isPlay: true}
	}
	else if(action.type === 'progressChangeStore'){
		return {...state, changeProgressTo:action.changeProgressTo}
	}
	else if(action.type === 'changeProgressSucc'){
		return {...state, changeProgressTo:false}
	}else if(action.type === 'togglePlayStyle'){
		return {...state, playStyle: action.playStyle}
	}
	else{
		return state
	}
}
function findIndex(list, item){
	for(let i=0; i<list.length; i++){
		if (list[i].id === item.id && list[i].file === item.file){
			return i
		}
	}
	return 0
}