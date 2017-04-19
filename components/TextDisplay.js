import React, {Component}  from 'react'
import TextDecor from './TextDecor'

class TextDisplay extends Component {

constructor(props,context){
	super(props,context)
		this.state = {
			inputText:"initial text"
	}
}


handleChange(event) {
	//console.log(event.target.value);
	this.setState({
		inputText: event.target.value
	})
}

	render(){
		return (
			<div>
			<input 
			  type="text" 
			  placeholder="input text"
			  value={this.state.inputText}
			  onChange ={this.handleChange.bind(this)}
			  />
			  <TextDecor text={this.state.inputText} />
			  </div>
			)
	}
}

export default TextDisplay