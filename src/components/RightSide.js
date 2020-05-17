import PropTypes from 'prop-types';
import React from 'react';
import { Contact, PurchaseForm } from '.';
import styled from 'styled-components/macro';
import { Container } from '../styles';

const RightSide = (props) => {
	const { mainTitle, subTitle } = props;
	return (
		<Container width='40%' height='100vh'>
			<Title>{mainTitle}</Title>
			<Subtitle>{subTitle}</Subtitle>
			<PurchaseForm />
			<Contact email='Connie@conniecahill.com' />
		</Container>
	);
};

RightSide.propTypes = {
	mainTitle: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};

export default RightSide;

const Title = styled.h1`
	font-size: 75px;
	color: var(--primary);
	font-family: 'Courgette', cursive;
`;

const Subtitle = styled.h2`
	font-size: 50px;
	font-family: 'Courgette', cursive;
`;
