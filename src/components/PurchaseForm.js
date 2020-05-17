import React from 'react';
import paymentMethods from '../img/payment-methods.png';
import { useFormik } from 'formik';
import styled from 'styled-components/macro';
import { CustomPayPalButton } from './';

const PurchaseForm = () => {
	const formik = useFormik({
		initialValues: {
			song: 'null',
			name: '',
			email: '',
		},
	});

	const songs = [
		{ name: 'Select', value: 'null' },
		{ name: 'I Believe In Miracles - $1.49', value: 'I Believe In Miracles' },
		{ name: 'To Be Found Faithful - $1.49', value: 'To Be Found Faithful' },
		{ name: 'Both Songs - $2.99', value: 'Both' },
	];

	const options = songs.map((song) => (
		<option value={song.value}>{song.name}</option>
	));

	return (
		<>
			<Form onSubmit={formik.handleSubmit}>
				<select
					required
					id='song'
					name='song'
					onChange={formik.handleChange}
					value={formik.values.song}
				>
					{options}
				</select>
				<CustomPayPalButton
					formSong={formik.values.song}
					resetForm={formik.resetForm}
				/>
			</Form>
			<PaymentMethods>
				<img src={paymentMethods} alt='Payment Methods' />
			</PaymentMethods>
		</>
	);
};
export default PurchaseForm;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 65%;

	select {
		padding: 10px;
		width: 100%;
		outline: none;
		margin: 7px 0;
		border-radius: 9px;
		border: 1px solid var(--primary);
		text-align: center;
		background: none;
		font-size: 25px;
	}
	div {
		width: 100%;
	}
`;
const PaymentMethods = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	max-width: 70%;

	img {
		margin-top: 10px;
		width: 60%;
	}
`;
