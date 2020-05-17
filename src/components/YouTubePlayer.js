import PropTypes from 'prop-types';
import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components/macro';

const YouTubePlayer = (props) => {
	const { title, id, width, height } = props;
	const opts = {
		height: height,
		width: width,
		showinfo: 0,
	};
	return (
		<>
			<VideoTitle>{title}</VideoTitle>
			<YouTube videoId={id} opts={opts} />
		</>
	);
};

YouTubePlayer.propTypes = {
	height: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
};

export default YouTubePlayer;

const VideoTitle = styled.p`
	font-size: 39px;
	margin-top: 0;
	margin-bottom: 5px;
	text-align: center;
`;
