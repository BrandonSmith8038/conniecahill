import React from 'react';
import { YouTubePlayer } from './';

const RightSide = () => {
	return (
		<div className='right-side'>
			<div className='overlay'></div>
			<div className='video-thumbs'>
				<YouTubePlayer
					title='I Beleive In Miracles'
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

export default RightSide;
