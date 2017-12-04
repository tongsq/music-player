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
export const volumeChange = volume =>{
	return {'type': 'volumeChange',volume:Math.round(volume * 10000) / 100}
}
export const changeProgressSucc = () =>{
	return {'type': 'changeProgressSucc'};
}
export const togglePlayStyle = () =>{
	return {'type': 'togglePlayStyle'}
}
