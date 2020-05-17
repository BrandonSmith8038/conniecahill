import React from 'react';
import styled from 'styled-components/macro';
import backgroundImage from '../img/Home-Page-Background.jpg';
import { YouTubePlayer } from '.';
import { Container } from '../styles';

const LeftSide = () => {
	return (
		<LeftSideContainer>
			<Container>
				<VideoThumbs>
					<YouTubePlayer
						title='I Believe In Miracles'
						id='o2UGvAT5Vrw'
						height='315'
						width='100%'
					/>
					<YouTubePlayer
						title='To Be Found Faithful'
						id='o2UGvAT5Vrw'
						height='315'
						width='100%'
					/>
				</VideoThumbs>
			</Container>
		</LeftSideContainer>
	);
};

export default LeftSide;

const LeftSideContainer = styled.div`
	background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
		url(${backgroundImage});
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	width: 60%;

	@media (max-width: 890px) {
		width: 100%;
		height: 100%;
		padding-bottom: 20px;
	}
`;

const VideoThumbs = styled.div`
	color: white;
	width: 50%;
	@media (max-width: 890px) {
		width: 80%;
	}
`;
