const dotenv = require('dotenv').config();
const mailer = require('nodemailer-promise');

exports.handler = (event, context, callback) => {
	const data = JSON.parse(event.body);
	const { name, email, song } = data;
	const emailBody = `
  ${name},
  Thank you very much for your puchase! Here is your song to download
  `;

	const sendEmail = mailer.config({
		service: 'gmail',
		auth: {
			user: process.env.SENDFROMEMAIL,
			pass: process.env.GMAIL_APP_PASSWORD,
		},
	});
	let attachments = [];
	if (song === 'I Believe In Miracles') {
		attachments = [
			{
				filename: `${song}.mp3`,
				path:
					'https://conniecahill.s3-us-west-1.amazonaws.com/Songs/I+Believe+In+Miracles.mp3',
			},
		];
	}
	if (song === 'To Be Found Faithful') {
		attachments = [
			{
				filename: `${song}.mp3`,
				path:
					'https://conniecahill.s3-us-west-1.amazonaws.com/Songs/To+Be+Found+Faithful.mp3', //TODO Will Need To Change This URL WHEN CORRECT FILE IS UPLOADED
			},
		];
	}

	if (song === 'Both') {
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
	}
	const options = {
		user: process.env.SENDFROMEMAIL,
		pass: process.env.aulcwufziyrlcoct,
		to: 'brandon@reddirtwebdesign.com',
		from: process.env.SENDFROMEMAIL,
		subject: `Purchase Of ${song} From Connie Cahill`,
		text: emailBody,
		attachments,
	};
	sendEmail(options)
		.then((res) => {
			console.log(res);

			callback(null, { statusCode: 200, body: JSON.stringify(res) });
		})
		.catch((err) => {
			console.error(err);
			callback(null, {
				statusCode: 500,
				body: JSON.stringify({ msg: err }),
			});
		});
};
