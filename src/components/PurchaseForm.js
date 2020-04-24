import React from 'react';
import { useFormik } from 'formik';

const PurchaseForm = () => {
	const options = ['Select', 'I Believe In Miracles', 'To Be Found Faithful'];

	const onSubmit = (e) => {
		console.log(e);
	};
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<div className='form'>
			<form onSubmit={formik.handleSubmit}>
				<input
					id='name'
					name='name'
					type='name'
					placeholder='Name'
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				<input
					id='email'
					name='email'
					type='email'
					placeholder='Email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
export default PurchaseForm;
