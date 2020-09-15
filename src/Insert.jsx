import React,{Component} from 'react'
import {connect} from 'react-redux';
import * as f2 from './actions';

class Insert extends Component
{
	state={
		name:"",
		email:""
	}
	input(e)
	{
		let s=this.state
		let col=e.target.name
		let val=e.target.value
		s[col]=val
		this.setState(s)
	}
	insert(e)
	{
		e.preventDefault()
		this.props.insert1(this.state)
	}
	render()
	{
		let {name,email}=this.state
		return <div>
					<form onSubmit={this.insert.bind(this)}>
						<input onChange={this.input.bind(this)}  name="name" value={name} placeholder="name"/>
						<input onChange={this.input.bind(this)}  name="email" value={email} placeholder="email"/>
						<button>add new record</button>
					</form>
				</div>
		}
}

export default connect(state=>state,f2)(Insert);