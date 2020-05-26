import styled from 'styled-components/macro';

const Card = styled.div`
	color: white;
	background: var(--primary-light);
	background: -webkit-linear-gradient(to right, #00223e, var(--primary-light));
	background: linear-gradient(to right, #00223e, var(--primary-light));
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	/* padding: 1rem; */
	box-shadow: var(--shadow-light);
	width: 24%;

	h2 {
		font-family: 'Courgette', cursive;
	}

	button {
		color: white;
		margin-top: 30px;
		margin-bottom: 30px;
		:hover {
			color: white;
			border-color: white;
		}
	}
`;

export default Card;
