const intial={
	a:require("./users"),
	ob:{id:0,name:"",email:""},
	message:""
}

const reducer=function(state=intial,action){
	switch(action.type)
	{
		case "insert":
		return {
				...state,
				a:[...state.a,{id:state.a.length+1,...action.payload}],
				message:"new added"

			}
		case "edit":
			return {
				...state,
				ob:action.payload

			}
		case "delete":
			return {
				...state,
				message:"deleted suvccess",
				a:state.a.filter(x=>x.id!==action.payload)
			}
		case "input":
			return {
				...state,
				ob:{...state.ob,[action.col]:action.val}
			}
		case "update"	:
			return {
				...state,
				a:state.a.map(x=>x.id===state.ob.id?(state.ob):(x)),
				message:"updated"

			}
		default:
			return state
	}
}

export default reducer