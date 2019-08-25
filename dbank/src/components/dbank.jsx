import React, { Component, useRef } from 'react';
import DbankMoneySituation from './dbank.money';
import DBankButtons from './dbank.buttons';
import DBankDepMoney from './Depositar/dBank.depMoney';

class DBank extends Component {

	componentDidMount() {
		setTimeout(() => {
			document.getElementById("dbankBackground").classList.toggle("dbankBackground-enter");
			document.getElementById("dbankHeader").classList.toggle("dbankHeader-enter");
			document.getElementById("dbankHeaderSep").classList.toggle("dbankHeaderSep-enter");
			document.getElementById("dbankCloseBtn").classList.toggle("dbankCloseBtn-enter");
			document.getElementById("dbankCard").classList.toggle("dbankCard-enter");
			document.getElementById("dbankMoneySituation").classList.toggle("dbankMoneySituation-enter");
		},0)
	}

	changePage = (page) => {
		if(page == 1 && this.state.openDepositar == false)
		document.getElementById("dbankMainPageGradient").classList.add("dbankMainPageGradient-show");
		this.setState({openDepositar: true});
	}

	close = (frompage) =>{
		document.getElementById("dbankMainPageGradient").classList.remove("dbankMainPageGradient-show");
		if (frompage == 1) {
			this.setState({ openDepositar: false });
			this.btnRef.current.close(frompage);
		}
	}

	constructor(props) {
		super(props);
		this.state = { openDepositar: false }
		this.btnRef = React.createRef();
	}

	render() {
		let dbankDepMoney;
		if (this.state.openDepositar) {
			dbankDepMoney = <DBankDepMoney close={this.close}></DBankDepMoney>
		} else {
			dbankDepMoney = "";
		}

		return (
			<div className="dbankContainer">
				<div id="dbankBackground" className="dbankBackground"></div>
				<h2 id="dbankHeader" className="dbankHeader">DBank</h2>
				<div className="dbankHeaderSepContainer">
					<div id="dbankHeaderSep" className="dbankHeaderSep" ></div>
				</div>
				<div id="dbankCloseBtn" className="dbankCloseBtn">X</div>
				<div id="dbankMainPageGradient" className="dbankMainPageGradient"></div>
				<div id ="dbankCard" className="dBankCard">
					<img src="https://screenshots.byjokese.com/2019/08/firefox_2019-08-22_17-11-51.jpg" alt="card"/>
				</div>
				<DbankMoneySituation money="500" lastTransc="95"></DbankMoneySituation>
				{dbankDepMoney}
				<DBankButtons navigate={this.changePage} ref={this.btnRef}></DBankButtons>
			</div>
		);
	}
}

export default DBank;
