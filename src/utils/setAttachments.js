const setAttachments = (song) => {
	let attachments = '';
	switch (song) {
		case 'I Believe In Miracles':
			attachments = {
				filename: `${song}.mp3`,
				path:
					'https://conniecahill.s3-us-west-1.amazonaws.com/Songs/I+Believe+In+Miracles.mp3',
			};
			break;
		case 'To Be Found Faithful':
			attachments = {
				filename: `${song}.mp3`,
				path:
					'https://conniecahill.s3-us-west-1.amazonaws.com/Songs/To+Be+Found+Faithful.mp3', //TODO Will Need To Change This URL WHEN CORRECT FILE IS UPLOADED
			};
			break;
		case 'Both':
			attachments = [
				{
					filename: `I Believe In Miracles.mp3`,
					path:
						'https://conniecahill.s3-us-west-1.amazonaws.com/Songs/I+Believe+In+Miracles.mp3',
				},
				{
					filename: `To Be Found Faithful.mp3`,
					path:
						'https://conniecahill.s3-us-west-1.amazonaws.com/Songs/To+Be+Found+Faithful.mp3', //TODO Will Need To Change This URL WHEN CORRECT FILE IS UPLOADED
				},
			];
			break;
		default:
			attachments = '';
	}
	return attachments;
};

export default setAttachments;
