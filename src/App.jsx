import React,{Component} from 'react'
import Insert from './Insert';
import Edit from './Edit';
import Table from './Table';
import Message from './Message';
class App extends Component
{
	render()
	{
		return <div>
					<Message />
					<Insert/>
					<Edit/>
					<Table/>
				</div>
		}
}

export default App;