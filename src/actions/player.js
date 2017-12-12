import {showTip} from './sys'
export const playItem = item =>{
	return {type:'playItem', item:item}
}
export const playNext = ()=>{
	return {type: 'playNext'}
}
export const playPrev = ()=>{
	return {type: 'playPrev'}
}
export const updateProgress = (options)=>{
	return {'type': 'updateProgress','progress':Math.round(options.played * 10000) / 100}
}
export const togglePlay = ()=>{
	return {'type': 'togglePlay'}
}
export const progressChange = progress =>{
	return {'type': 'progressChange', changeProgressTo:progress}
}
export const progressChangeStore = progress =>{
	return {'type': 'progressChangeStore', changeProgressTo:progress}
}
export const volumeChange = volume =>{
	return {'type': 'volumeChange',volume:Math.round(volume * 10000) / 100}
}
export const changeProgressSucc = () =>{
	return {'type': 'changeProgressSucc'};
}
export const togglePlayStyle = () =>{
	return (dispatch, getState)=>{
		let styleList = ["rand", "list", "single"]
		let styleListMsg = ["随机播放", "列表循环", "单曲循环"]
		let state = getState().player
		let index = findIndex(styleList,state.playStyle)
		let newIndex = (index + 1) % styleList.length
		dispatch(showTip(styleListMsg[newIndex]))
		dispatch({'type': 'togglePlayStyle', playStyle: styleList[newIndex]})
	}
}
function findIndex(list, item){
	for(let i=0; i<list.length; i++){
		if (list[i] === item){
			return i
		}
	}
	return 0
}