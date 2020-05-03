import React from 'react';
import './index.css';
import { RightSide, LeftSide } from './components';
import { Switch, Route } from 'react-router-dom';
import { Admin } from './pages';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' exact>
					<div className='home-page-container'>
						<RightSide />
						<LeftSide mainTitle='Connie Cahill' subTitle='Purchase Mp3' />
					</div>
				</Route>
				<Route path='/admin' component={Admin} />
			</Switch>
		</div>
	);
}

export default App;
