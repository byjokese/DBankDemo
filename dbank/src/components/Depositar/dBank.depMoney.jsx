import React, { Component } from 'react';
import DBankkeyboard from './dBank.dep.Keyboard';
import DBankDepMoneyQuantity from './dbank.dep.money';

class DBankDepMoney extends Component {
	constructor(props) {
		super(props);
		this.state = { money: 0, fontsize: 200 }
	}

	componentDidMount() {
		//Las animaciones de entrada duran 3s
		setTimeout(() => {
			document.getElementById("dBankkeyboardContainer").classList.add("dBankkeyboardContainer-enter");
			document.getElementById("dBankDepMoneyContainer").classList.add("dBankDepMoneyContainer-enter");
			document.getElementById("dBankDepCloseBtn").classList.add("dBankDepCloseBtn-enter");
			let keys = document.getElementsByClassName("dBankkeyboardKey");
			Array.prototype.forEach.call(keys, function (key) {
				key.classList.add("dBankkeyboardKey-enter");
			});
		}, 2500)
	}

	onPress = (num, e) => {
		let newMoney = 0;
		switch (num) {
			case 10:
				if (this.state.money.length - 1 >= 1)
					newMoney = this.state.money.substring(0, this.state.money.length - 1);
				break;
			case 11:
				if (this.state.money !== 0) {
					newMoney = "" + this.state.money + 0;
				}
				break;
			case 12:
				break;
			default:
				if (this.state.money === 0) {
					newMoney = num;
				} else {
					newMoney = "" + this.state.money + num;
				}
				break;
		}
		this.setState({money:newMoney});
		let curentLength = newMoney.toString().length;
		let newFontSize;
		if (curentLength > 5){
			newFontSize = 200 - ((curentLength - 5) * (30*1));
		} else {
			newFontSize = 200;
		}
		this.setState({ fontsize: newFontSize});
	}

	close = () => {
		this.props.close(1);
	}

	render() {
		return (
			<div className="DBankDepPage">
				<DBankkeyboard onpress={this.onPress}></DBankkeyboard>
				<DBankDepMoneyQuantity money={this.state.money} fontsize={this.state.fontsize}></DBankDepMoneyQuantity>
				<div id="dBankDepCloseBtn" className="dBankDepCloseBtn" onClick={this.close}>&lt;</div>
			</div>
		);
	}
}

export default DBankDepMoney;
