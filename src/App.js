import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainLayout from './components/Layout/MainLayout';

import HomeComponent from './components/HomeComponent/HomeComponent';
import NotFound from './components/NotFound';


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" >
					<Redirect to="/home" />
				</Route>
				<MainLayout path="/home" component={HomeComponent} layout="MainLayout" />
				<Route path="*" component={NotFound} />			
			</Switch>
		</Router>
	);
}

export default App;
