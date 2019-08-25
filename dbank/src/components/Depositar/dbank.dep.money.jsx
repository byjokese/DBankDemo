import React, { Component } from 'react';

class DBankDepMoneyQuantity extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div id="dBankDepMoneyContainer" className="dBankDepMoneyContainer">
				<div>cantidad</div>
				<div id="dbankDepMoneyQuantity" className="dbankDepMoneyQuantity">
					<span style={{fontSize: this.props.fontsize}}>{this.props.money}€</span>
				</div>
			</div>
		)
	}
}

export default DBankDepMoneyQuantity;
