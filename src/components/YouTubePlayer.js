import PropTypes from 'prop-types';
import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = (props) => {
	const { title, id, width, height } = props;
	const opts = {
		height: height,
		width: width,
		showinfo: 0,
	};
	return (
		<>
			<p className='video-title'>{title}</p>
			<div className='video-thumb'>
				<YouTube videoId={id} opts={opts} />
			</div>
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
