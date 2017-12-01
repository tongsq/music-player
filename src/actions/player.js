export const playItemAction = item =>{
	return {type:'playItem', item:item}
}
export const playNextAction = ()=>{
	return {type: 'playNext'}
}
export const playPrevAction = ()=>{
	return {type: 'playPrev'}
}
export const updateProgressAction = (options)=>{
	return {'type': 'updateProgress','progerss':Math.round(options.played * 10000) / 100}
}
export const togglePlayAction = ()=>{
	return {'type': 'togglePlay'}
}
export const progressChangeAction = progress =>{
	return {'type': 'progressChange', progress}
}
export const volumeChangeAction = volume =>{
	return {'type': 'volumeChange',volume:Math.round(volume * 10000) / 100}
}
