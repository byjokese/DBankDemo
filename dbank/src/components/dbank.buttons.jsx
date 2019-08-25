import React, { Component } from 'react';

class DBankButtons extends Component {

	componentDidMount() {
		setTimeout(() => {
			document.getElementById("dBankButtonContainer").classList.add("dBankButtonContainer-enter");
			const buttons = document.getElementsByClassName("dBankButton");
			Array.prototype.forEach.call(buttons, function (button) {
				button.classList.add("dBankButton-enter");
			});
		},0)
	}

	navigate = (page, e) => {
		this.props.navigate(page);
		switch (page) {
			case 1:
				document.getElementById("dBankButtonContainer").classList.add("dBankButtonContainer-nav");
				const buttons = document.getElementsByClassName("dBankButton");
				Array.prototype.forEach.call(buttons, function (button) {
					button.classList.add("dBankButton1");
				});
				break;
			default:
				break;
		}
	}

	close = (btnAnimToClose) => {
		switch (btnAnimToClose) {
			case 1:
					document.getElementById("dBankButtonContainer").classList.remove("dBankButtonContainer-nav");
					const buttons = document.getElementsByClassName("dBankButton");
					Array.prototype.forEach.call(buttons, function (button) {
						button.classList.remove("dBankButton1");
					});
				break;
			default:
				break;
		}
	}

	constructor(props) {
		super(props);
		this.state = { close:false }
	}
	render() {
		return (
			<div id="dBankButtonContainer" className="dBankButtonContainer">
					<div className="dBankButton" onClick={this.navigate.bind(this, 1)}><span>Depositar Dinero</span></div>
					<div className="dBankButton"><span>Retirar Dinero</span></div>
					<div className="dBankButton"><span>Transferir Dinero</span></div>
					<div className="dBankButton"><span>Más</span></div>
			</div>
		);
	}
}

export default DBankButtons;
