import React from 'react';
import { YouTubePlayer } from '.';

const LeftSide = () => {
	return (
		<div className='left-side'>
			<div className='overlay'></div>
			<div className='video-thumbs'>
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
			</div>
		</div>
	);
};

export default LeftSide;
