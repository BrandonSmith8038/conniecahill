import React, { useState } from 'react';
import {
	IdentityContextProvider,
	useIdentityContext,
} from 'react-netlify-identity';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Admin, Login } from './pages';
import { LeftSide, RightSide } from './components';
import Modal from 'react-modal';
import 'normalize.css';
import styled from 'styled-components/macro';
import './index.css';

const customStyles = {
	content: {
		bottom: '5%',
		left: '50%',
		right: 'auto',
		top: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: 'green',
		height: 'auto',
		width: '50%',
		zIndex: '-1',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// BootStrap CSS Test
		padding: '15px',
		border: '1px solid transparent',
		borderRadius: '4px',
		backgroundColor: '#dff0d8',
		borderColor: '#3c763d',
		color: '#3c763d',
	},
};
Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'none';

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

	const [modalIsOpen, setModalOpen] = useState(false);
	const [message, setMessage] = useState('dsaf');

	// TODO Figure out to prevent rerender every time the modal opens or closes
	// TODO Come up with error messages
	const openModal = () => {
		setModalOpen(true);
		setTimeout(() => {
			setModalOpen(false);
		}, 5000);
	};
	return (
		<IdentityContextProvider url={url}>
			<div className='App'>
				<Modal
					isOpen={modalIsOpen}
					style={customStyles}
					contentLabel='Example Modal'
				>
					{message}
				</Modal>
				<Switch>
					<PublicRoute path='/' exact>
						<HomePageContainer>
							<LeftSide />
							<RightSide
								mainTitle='Connie Cahill'
								subTitle='Purchase Mp3'
								setMessage={setMessage}
								openModal={openModal}
							/>
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
