import React, { Component } from 'react';

class DBankkeyboard extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		return (
			<div id="dBankkeyboardContainer" className="dBankkeyboardContainer">
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 1)}>1</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 2)}>2</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 3)}>3</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 4)}>4</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 5)}>5</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 6)}>6</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 7)}>7</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 8)}>8</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 9)}>9</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 10)}>&lt;</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 11)}>0</div>
				<div className="dBankkeyboardKey" onClick={this.props.onpress.bind(this, 12)}></div>
		</div> );
	}
}

export default DBankkeyboard;
