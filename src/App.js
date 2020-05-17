import React from 'react';
import {
	IdentityContextProvider,
	useIdentityContext,
} from 'react-netlify-identity';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Admin, Login } from './pages';
import { LeftSide, RightSide } from './components';
import 'normalize.css';
import styled from 'styled-components/macro';
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
						<HomePageContainer>
							<RightSide />
							<LeftSide mainTitle='Connie Cahill' subTitle='Purchase Mp3' />
						</HomePageContainer>
					</PublicRoute>
					<PrivateRoute path='/admin' component={Admin} />
					<PublicRoute path='/login' component={Login} />
				</Switch>
			</div>
		</IdentityContextProvider>
	);
}

export default App;

const HomePageContainer = styled.div`
	display: flex;

	@media (max-width: 890px) {
		flex-direction: column-reverse;
	}
`;
