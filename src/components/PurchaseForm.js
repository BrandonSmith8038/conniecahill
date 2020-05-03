import React from 'react';
import paymentMethods from '../img/payment-methods.png';
import { useFormik } from 'formik';
import { CustomPayPalButton } from './';

import { Link } from 'react-router-dom';

const PurchaseForm = () => {
	const formik = useFormik({
		initialValues: {
			song: 'null',
			name: '',
			email: '',
		},
	});

	return (
		<div className='form'>
			<Link to='/admin'>Admin</Link>
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
					<option value='Both'>Both Songs - $2.99</option>
				</select>
				<CustomPayPalButton
					formSong={formik.values.song}
					resetForm={formik.resetForm}
				/>
				<div className='payment-methods'>
					<img src={paymentMethods} alt='Payment Methods' />
				</div>
			</form>
		</div>
	);
};
export default PurchaseForm;
