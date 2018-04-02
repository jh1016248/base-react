import React, { render } from 'react';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory } from 'react-router';
import App from '../app'

import Index from '../pages/index';
import Chat from '../pages/chat';


class router extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
        
	}
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Index} />
					<Route path="/chat" component={Chat}></Route>
				</Route>
			</Router>
		);
	}
}

export default router;
