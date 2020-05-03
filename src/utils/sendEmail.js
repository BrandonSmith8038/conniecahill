import axios from 'axios';

const sendEmail = (name, email, song) => {
	axios
		.post('/.netlify/functions/SendEmail', {
			name,
			email,
			song,
		})
		.then((res) => {
			console.log('Email Sent To Customer: ', res);
		})
		.catch((e) => console.error(e));
};

export default sendEmail;
