import styled from 'styled-components/macro';

const CustomInput = styled.input`
	background: rgba(255, 255, 255, 0.9);
	padding: 1rem;
	margin: 0.5rem;
	color: #444;
	outline: none;
	border: 2px solid var(--primary);
	border-radius: 5px;
	width: 70%;
	font-size: 1.5rem;
	&::placeholder {
		font-family: 'Courgette', cursive;
	}
`;

export default CustomInput;
