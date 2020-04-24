import React from 'react';
import './index.css';
import { RightSide, LeftSide } from './components';

function App() {
	return (
		<div className='App'>
			<div className='home-page-container'>
				<RightSide />
				<LeftSide mainTitle='Connie Cahill' subTitle='Purchase Mp3' />
			</div>
		</div>
	);
}

export default App;
