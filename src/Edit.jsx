import React,{Component} from 'react'
import {connect} from 'react-redux';
import * as f2 from './actions';
class Edit extends Component
{
	input(e)
	{
		let s=this.state
		let col=e.target.name
		let val=e.target.value
		this.props.input1(col,val)
	}
	update(e)
	{
		e.preventDefault()
		this.props.update1()
	}
	render()
	{
		let {id,name,email}=this.props.ob
		if(id>0)
		{
			return <div>
						<form onSubmit={this.update.bind(this)}>
							<h1>editing {id}</h1>
							<input onChange={this.input.bind(this)}  name="name" value={name} placeholder="name"/>
							<input onChange={this.input.bind(this)}  name="email" value={email} placeholder="email"/>
							<button>update this record</button>
						</form>
					</div>
		}
		else
		{
			return "kindly clickedit button to edit one"
		}
	}
}


const f1=state=>state
export default connect(f1,f2)(Edit);