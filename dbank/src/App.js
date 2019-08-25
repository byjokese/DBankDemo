import React, { Component } from 'react';
import DBank from './components/dbank';
import "./App.scss";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false }
	}

	openBankDialog = () => {
		this.setState({
			open: true
		})
	}

	render() {
		let dbank;
		if(this.state.open){
			dbank = <DBank open={this.state.open}></DBank>
		}
		return (
			<div className="App">
				{dbank}
				<button className="btn" onClick={this.openBankDialog}>Abrir Banco</button>
			</div>
		);
	}
}

export default App;
