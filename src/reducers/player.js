import musicList from '../config/config'

const initialState = {
	currentItem: musicList[0],
	musicList:musicList,
	progress:0,
	volume:0
}

export default (state = initialState, action)=>{
	if (action.type === 'updateProgress'){
		return {...state, progress:action.progress}
	}else if(action.type === 'playNext'){
		let index = state.musicList.indexOf(state.currentItem)
		let newIndex = (index + 1) % state.musicList.length()
		return {...state, currentItem:state.musicList[newIndex]}
	}else if(action.type === 'playPrev'){
		let index = state.musicList.indexOf(state.currentItem)
		let length = state.musicList.length()
		let newIndex = (index - 1 + length) % length
		return {...state, currentItem:state.musicList[newIndex]}
	}else if(action.type === 'playItem'){
		return {...state, currentItem:action.item}
	}
	else{
		return state
	}
}