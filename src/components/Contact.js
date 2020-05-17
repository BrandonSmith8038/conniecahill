import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';

const Contact = (props) => {
	const { email } = props;
	return (
		<ContactContainer>
			<p>For Additional Info</p>
			<p>Contact: {email}</p>
		</ContactContainer>
	);
};

Contact.propTypes = {
	email: PropTypes.string.isRequired,
};

export default Contact;

const ContactContainer = styled.div`
	margin-top: auto;
	margin-bottom: 20px;
	color: var(--primary);
	justify-self: flex-end;
	text-align: center;
	font-family: 'Courgette', cursive;

	p {
		font-size: 30px;
		margin: 0;
	}
	@media (max-width: 890px) {
		margin-top: 20px;
	}
`;
