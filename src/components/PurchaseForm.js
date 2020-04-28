import React, { useEffect } from 'react';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import paymentMethods from '../img/payment-methods.png';
import { useFormik } from 'formik';
import { useAlert } from 'react-alert';

const PurchaseForm = () => {
	const alert = useAlert();
	const formik = useFormik({
		initialValues: {
			song: 'null',
			name: '',
			email: '',
		},
	});
	const saveToDB = (payPalOrderID, name, email, song) => {
		axios
			.post('/.netlify/functions/CreateOrder', {
				payPalOrderID,
				name,
				email,
				song,
			})
			.then((res) => {
				console.log('Order Saved To Database');
			})
			.catch((e) => console.error(e));
	};
	return (
		<div className='form'>
			<form onSubmit={formik.handleSubmit}>
				<select
					required
					id='song'
					name='song'
					onChange={formik.handleChange}
					value={formik.values.song}
				>
					<option value='null'>Select</option>
					<option value='I Believe In Miracles'>
						I Believe In Miracles - $1.49
					</option>
					<option value='To Be Found Faithful'>
						To Be Found Faithful - $1.49
					</option>
				</select>
				<input
					required
					id='name'
					name='name'
					type='name'
					placeholder='Name'
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				<input
					required='true'
					id='email'
					name='email'
					type='email'
					placeholder='Email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>

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
						return actions.order.create({
							purchase_units: [
								{
									description: `${formik.values.song} - MP3`,
									amount: {
										currency_code: 'USD',
										value: '1.49',
									},
								},
							],
							application_context: {
								shipping_preference: 'NO_SHIPPING', // default is "GET_FROM_FILE"
							},
						});
						// }
					}}
					onSuccess={(details, data) => {
						alert.show(
							<div style={{ color: '#07df1c' }}>
								{' '}
								Thank You! We have recieved your order, please check your email
							</div>,
						);
						const { orderID } = data;
						const { email_address: email } = details.payer;
						const {
							given_name: firstName,
							surname: lastName,
						} = details.payer.name;
						const { description: song } = details.purchase_units[0];
						const name = `${firstName} ${lastName}`;
						saveToDB(orderID, name, email, song);
						formik.resetForm();
					}}
				/>
				<div className='payment-methods'>
					<img src={paymentMethods} alt='Payment Methods' />
				</div>
			</form>
		</div>
	);
};
export default PurchaseForm;
