
const initialState = {
	tipMsg:false
}
export default (state = initialState, action)=>{
	if (action.type === 'showTipSucc'){
		if (state.tipMsg === action.tipMsg){
			return {...state, tipMsg:false}
		}
		return {...state}
	}else if(action.type === 'showTip'){
		return {...state, tipMsg:action.tipMsg}
	}
	else{
		return state
	}
}
