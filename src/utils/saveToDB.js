import axios from 'axios';

const saveToDB = (payPalOrderID, name, email, song, price) => {
	axios
		.post('/.netlify/functions/CreateOrder', {
			payPalOrderID,
			name,
			email,
			song,
			price,
		})
		.then((res) => {
			console.log('Order Saved To Database');
		})
		.catch((e) => console.error(e));
};

export default saveToDB;
