import styled from 'styled-components';

const Button = styled.button`
	color: black; /* button text color */
	outline: none;
	background: transparent;
	border: 2px solid var(--primary-light);
	border-radius: 7px;
	letter-spacing: 0.0625em;
	padding: 0.5rem 1.8rem;
	text-transform: uppercase;
	font: bold 16px 'Bitter', sans-serif; /* use google font */
	line-height: 2;
	position: relative;
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
	text-decoration: none; /* remove underline if using A instead of BUTTON tag */
	overflow: hidden;
	transition: all 0.5s;
	&::before,
	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		background: var(--primary-light); /* onhover background color */
		z-index: -1;
		transform: translate3D(
			0,
			-100%,
			0
		); /* move elements above button so they don't appear initially */
		transition: all 0.3s;
	}
	&::before {
		background: none; /* button default background color */
		z-index: -2;
		transform: translate3D(0, 0, 0);
	}
	:hover {
		color: var(--primary);
		border-color: var(--primary);
	}
	:hover&::after {
		transform: translate3D(0, 0, 0);
		transition: all 0.3s;
	}
`;
export default Button;
