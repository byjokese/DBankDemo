import React, { Component } from 'react';

class DbankMoneySituation extends Component {
	constructor(props) {
		super(props);
		this.state = { money: this.props.money, lastTransc: this.props.lastTransc}
	}
	render() {
		return (
			<div id="dbankMoneySituation" className="dbankMoneySituation">
				<div className="dbank-currentMoney">saldo actual</div>
				<div className="dbankMoney">{this.state.money}€</div>
				<div className="dbank-lastTransac">ultima transacción</div>
				<div className="dbankLastTranscMoney">{this.state.lastTransc}€</div>
			</div>
		);
	}
}

export default DbankMoneySituation;
