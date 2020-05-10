import React from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { Container, Card, Button, CustomInput } from '../styles';
import { useFormik } from 'formik';

const Login = (props) => {
	const { loginUser } = useIdentityContext();
	// const [msg, setMsg] = useState(''); Will Use Later For New Alert Modal
	const { history } = props;
	const formik = useFormik({
		initialValues: {
			user: '',
			password: '',
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();
		const user = formik.values.user;
		const password = formik.values.password;
		loginUser(user, password, false)
			.then((user) => {
				history.push('/admin');
				// setMsg(`Welcome ${user.user_metadata.full_name}`);
			})
			.catch((e) => console.log(e));
	};

	return (
		<>
			<Container style={{ height: '100vh' }}>
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
/* TURN THIS BACK ON TO REGISTER USER
Stick At The Top Of Card Component
	<IdentityModal
		showDialog={dialog}
		onCloseDialog={() => setDialog(false)}
		onLogin={(user) => console.log(`Hello ${user?.user_metadata}`)}
		onSignup={(user) => console.log(`Welcome ${user?.user_metadata}`)}
		onLogout={(use) => console.log(`Logged Out`)}
	/>
	{msg && <pre>{msg}</pre>}
	<pre>{`Is Logged In ${isLoggedIn}`}</pre>
	<Button onClick={() => setDialog(true)}>Login</Button> */
