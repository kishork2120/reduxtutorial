const initData = [];

export const storeFunction = (state = initData,action_obj)=>{
	if(action_obj === undefined){
		return [];
	}
	return {
		'PUT':[...state,action_obj.payload],
	}[action_obj.type]
}