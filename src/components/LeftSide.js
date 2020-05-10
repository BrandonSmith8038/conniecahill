import PropTypes from 'prop-types';
import React from 'react';
import { Contact, PurchaseForm } from './';

const LeftSide = (props) => {
	const { mainTitle, subTitle } = props;
	return (
		<div className='left-side'>
			<h1 className='title'>{mainTitle}</h1>
			<h2 className='subtitle'>{subTitle}</h2>
			<PurchaseForm />
			<Contact email='Connie@conniecahill.com' />
		</div>
	);
};

LeftSide.propTypes = {
	mainTitle: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};

export default LeftSide;
