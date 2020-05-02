const dotenv = require('dotenv').config();

const setAttachments = (song) => {
	const believeURL = process.env.BELIEVE_URL;
	const faithfulURL = process.env.FAITHFUL_URL;
	let attachments = '';
	switch (song) {
		case 'I Believe In Miracles - MP3':
			attachments = {
				filename: `${song}.mp3`,
				path: believeURL,
			};
			break;
		case 'To Be Found Faithful - MP3':
			attachments = {
				filename: `${song}.mp3`,
				path: faithfulURL, //TODO Will Need To Change This URL WHEN CORRECT FILE IS UPLOADED
			};
			break;
		case 'Both':
			attachments = [
				{
					filename: `I Believe In Miracles.mp3`,
					path: believeURL,
				},
				{
					filename: `To Be Found Faithful.mp3`,
					path: faithfulURL, //TODO Will Need To Change This URL WHEN CORRECT FILE IS UPLOADED
				},
			];
			break;
		default:
			attachments = '';
	}
	return attachments;
};

export default setAttachments;
