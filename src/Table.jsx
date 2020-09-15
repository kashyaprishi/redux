import React,{Component} from 'react'
import {connect} from 'react-redux';
import * as f2 from './actions';
class Table extends Component
{
	edit(x)
	{
			this.props.edit1(x)

	}
	del(id)
	{
			this.props.delete1(id)
	}
	render()
	{
		let {a,message}=this.props
		return <div>
					
					<h1>all data {a.length}</h1>
					<table>
						<thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>email</th>
								<th>actions</th>
							</tr>
						</thead>
						<tbody>
							{a.map(x=>
								<tr key={x.id}>
									<td>{x.id}</td>
									<td>{x.name}</td>
									<td>{x.email}</td>
									<td>
										<button onClick={this.edit.bind(this,x)}>edit</button>		
										<button onClick={this.del.bind(this,x.id)}>del</button>		
									</td>				
								</tr>
							)}
						</tbody>
					</table>
				</div>
		}
}
const f1=state=>state
export default connect(f1,f2)(Table);