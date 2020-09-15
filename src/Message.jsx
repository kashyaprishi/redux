import React,{Component} from 'react'
import {connect} from 'react-redux';
class Message extends Component
{
	
	render()
	{
		let {message}=this.props
		return <mark>
					server says {message}	
				</mark>
		}
}
const f1=state=>state
export default connect(f1)(Message);