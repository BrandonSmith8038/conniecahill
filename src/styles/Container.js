import styled from 'styled-components/macro';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: ${(props) => (props.width ? props.width : '100%')};
	height: ${(props) => (props.height ? props.height : '100%')};

	@media (max-width: 890px) {
		width: 100%;
		height: 100%;
	}
`;

export default Container;
