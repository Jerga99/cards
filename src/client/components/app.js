import './app.scss';

import React, {
	Component
} from 'react';

class AppContainer extends Component {
	componentDidMount(){
		console.log("Hey there!");
	}

	render() {
		return (
			<section>
				<h1> Hello World</h1>
				<button onClick={this._click.bind(this)}> I am button plz Click me</button>
			</section>
		);
	}

	_click(){	
		console.log("STUFF!!");
	}
}

export default AppContainer;
