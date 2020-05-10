import React from 'react';
import {
	IdentityContextProvider,
	useIdentityContext,
} from 'react-netlify-identity';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Admin, Login } from './pages';
import { LeftSide, RightSide } from './components';
import './index.css';

function App() {
	const url = 'https://serene-perlman-cc08e1.netlify.app/';

	const PublicRoute = (props) => {
		const { isLoggedIn } = useIdentityContext();
		return isLoggedIn ? <Route {...props} /> : <Route {...props} />;
	};

	const PrivateRoute = (props) => {
		const { isLoggedIn } = useIdentityContext();
		return isLoggedIn ? <Route {...props} /> : <Redirect to='/login' />;
	};
	return (
		<IdentityContextProvider url={url}>
			<div className='App'>
				<Switch>
					<PublicRoute path='/' exact>
						<div className='home-page-container'>
							<RightSide />
							<LeftSide mainTitle='Connie Cahill' subTitle='Purchase Mp3' />
						</div>
					</PublicRoute>
					<PrivateRoute path='/admin' component={Admin} />
					<PublicRoute path='/login' component={Login} />
				</Switch>
			</div>
		</IdentityContextProvider>
	);
}

export default App;
