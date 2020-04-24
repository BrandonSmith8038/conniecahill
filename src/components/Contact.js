import React from 'react';

const Contact = (props) => {
	const { email } = props;
	return (
		<div className='contact'>
			<p>For Additional Info</p>
			<p>Contact: {email}</p>
		</div>
	);
};

export default Contact;
