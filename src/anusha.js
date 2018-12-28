import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			obj : {
				fName:'',
				lName:''
			}
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		let name = e.target.name;
		let value = e.target.value;
		let state = this.state;
		state.obj[name] = value;
		this.setState(state);
		console.log(state)
	}
  render() {
    return (
		<div>
			<input name="fName" placeholder="first name" value={this.state.obj.fName} onChange={this.handleChange} /><br />
			<input name="lName" placeholder="last name" value={this.state.obj.lName} onChange={this.handleChange} /><br />
		</div>
	);
  }
}

export default App;
