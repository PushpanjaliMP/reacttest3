import React, { Component} from 'react'
import TextDisplay from './TextDisplay'

//var App = React.createClass({

//render() {
//	return <div>This is (Hot Module reloading) Definitely React App now</div>
//	}
//})

class App extends Component {

	render() {
		return (
			<div>
			<h1>This is the App Component </h1>
			<TextDisplay/>
			</div>
	)
	}
}
export default App