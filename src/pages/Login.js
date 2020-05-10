import React, { useRef, useState } from 'react';
import {
	useIdentityContext,
	// useNetlifyIdentity, Turn Back On To Register User
	// IdentityModal, Turn Back On To Register User
} from 'react-netlify-identity-widget';
import { Container, Card, Button, CustomInput } from '../styles';
import { useFormik } from 'formik';
// import 'react-netlify-identity-widget/styles.css'; Will Need To Turn On To Register User

const Login = (props) => {
	const { loginUser } = useIdentityContext();
	// const [dialog, setDialog] = useState(false); Turn Back On To Register User
	const [msg, setMsg] = useState('');
	const { history } = props;
	const formik = useFormik({
		initialValues: {
			user: '',
			password: '',
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		const user = formik.values.user;
		const password = formik.values.password;
		loginUser(user, password, true)
			.then((user) => {
				console.log('Success! Logged In', user);
				history.push('/admin');
				setMsg(`Welcome ${user.user_metadata.full_name}`);
			})
			.catch((e) => console.log(e) || setMsg('Error: ' + e.message));
	};

	return (
		<>
			<Container style={{ height: '100vh' }}>
				{/* TURN THIS BACK ON TO REGISTER USER */}
				{/* <IdentityModal
					showDialog={dialog}
					onCloseDialog={() => setDialog(false)}
					onLogin={(user) => console.log(`Hello ${user?.user_metadata}`)}
					onSignup={(user) => console.log(`Welcome ${user?.user_metadata}`)}
					onLogout={(use) => console.log(`Logged Out`)}
				/>
				{msg && <pre>{msg}</pre>}
				<pre>{`Is Logged In ${isLoggedIn}`}</pre>
				<Button onClick={() => setDialog(true)}>Login</Button> */}
				<Card>
					<h2 style={{ fontSize: '3.6rem' }}>Login</h2>
					<form onSubmit={formik.handleSubmit}>
						<CustomInput
							type='text'
							placeholder='User Name'
							onChange={formik.handleChange}
							value={formik.values.user}
							name='user'
						/>
						<CustomInput
							type='password'
							placeholder='Password'
							onChange={formik.handleChange}
							value={formik.values.password}
							name='password'
						/>
					</form>
					<Button onClick={(e) => onSubmit(e)}>Login</Button>
				</Card>
			</Container>
		</>
	);
};

export default Login;
