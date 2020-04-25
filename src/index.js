import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import 'typeface-courgette';

const options = {
	position: positions.TOP_CENTER,
	timeout: 10000,
	offsett: '30px',
	transition: transitions.FADE,
	type: 'success',
};

ReactDOM.render(
	<React.StrictMode>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
