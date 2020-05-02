import PropTypes from 'prop-types';
import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useAlert } from 'react-alert';
import { saveToDB, sendEmail } from '../utils';
require('dotenv').config();

const CustomPayPalButton = (props) => {
	const { formSong, resetForm } = props;
	const alert = useAlert();

	return (
		<div>
			<PayPalButton
				style={{
					label: 'checkout',
					shape: 'pill',
				}}
				options={{
					clientId: process.env.REACT_APP_PAYPAL_CLIENT,
					disableFunding: 'credit,card',
				}}
				createOrder={(data, actions) => {
					// Determine price if both songs are selected in form or just one
					const price = formSong === 'Both' ? '2.99' : '1.49';
					// Changed the description if both songs are selected
					const description =
						formSong === 'Both' ? 'Both' : `${formSong} - MP3`;
					// Create The Paypal Order
					return actions.order.create({
						purchase_units: [
							{
								description,
								amount: {
									currency_code: 'USD',
									value: price,
								},
							},
						],
						application_context: {
							shipping_preference: 'NO_SHIPPING', // default is "GET_FROM_FILE"
						},
					});
					// }
				}}
				// On Order Success
				onSuccess={(details, data) => {
					console.log({ details, data });
					// Show The Aler
					alert.show(
						<div style={{ color: '#07df1c' }}>
							{' '}
							Thank You! We have recieved your order, please check your email
						</div>,
					);
					// Create order to Send To Database
					const { orderID } = data;
					const { email_address: email } = details.payer;
					const {
						given_name: firstName,
						surname: lastName,
					} = details.payer.name;
					const { description: song } = details.purchase_units[0];
					const { value: price } = details.purchase_units[0].amount;
					const name = `${firstName} ${lastName}`;
					// Save To DB
					saveToDB(orderID, name, email, song, price);
					// Reset The Form
					sendEmail(name, email, song);
					resetForm();
				}}
			/>
		</div>
	);
};

CustomPayPalButton.propTypes = {
	formSong: PropTypes.string.isRequired,
	resetForm: PropTypes.func.isRequired,
};

export default CustomPayPalButton;
