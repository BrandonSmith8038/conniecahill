import React from 'react';
import {
	IdentityContextProvider,
	useIdentityContext,
} from 'react-netlify-identity-widget';
import { Route, Switch } from 'react-router-dom';
import { Admin, Login } from './pages';
import { LeftSide, RightSide } from './components';
import './index.css';

function App() {
	const url = 'https://serene-perlman-cc08e1.netlify.app/';

	return (
		<IdentityContextProvider url={url}>
			<div className='App'>
				<Switch>
					<Route path='/' exact>
						<div className='home-page-container'>
							<RightSide />
							<LeftSide mainTitle='Connie Cahill' subTitle='Purchase Mp3' />
						</div>
					</Route>
					<Route path='/admin' component={Admin} />
					<Route path='/login' component={Login}></Route>
				</Switch>
			</div>
		</IdentityContextProvider>
	);
}

export default App;
