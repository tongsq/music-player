export const playItemAction = item =>{
	console.log('action:playItem');
	return {type:'playItem', item:item}
}