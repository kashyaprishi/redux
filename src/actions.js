export function insert1(ob)
{
	return dispatch=>dispatch({type:"insert",payload:ob})
}

export function edit1(ob)
{
	return dispatch=>dispatch({type:"edit",payload:ob})
}

export function delete1(id)
{
	return dispatch=>dispatch({type:"delete",payload:id})
}

export function update1()
{
	return dispatch=>dispatch({type:"update"})
}

export function input1(col,val)
{
	return dispatch=>dispatch({type:"input",col:col,val:val})
}

