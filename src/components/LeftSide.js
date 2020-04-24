import React from 'react';
import paypalImage from '../img/pay-with-paypal-temp.jpg';
import { Contact, PurchaseForm } from './';

const LeftSide = (props) => {
	const { mainTitle, subTitle } = props;
	return (
		<div className='left-side'>
			<h1 className='title'>{mainTitle}</h1>
			<h2 className='subtitle'>{subTitle}</h2>
			<PurchaseForm />
			<div className='payment'>
				<img src={paypalImage} alt='' />
			</div>
			<Contact email='Connie@conniecahill.com' />
		</div>
	);
};

export default LeftSide;
