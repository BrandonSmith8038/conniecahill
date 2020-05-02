const { setAttachments, setSubject } = require('../utils');
const mailer = require('nodemailer-promise');
require('dotenv').config();

exports.handler = (event, context, callback) => {
	const data = JSON.parse(event.body);
	const { name, email, song } = data;
	const attachments = setAttachments(song);
	const subject = setSubject(song);
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

	const options = {
		user: process.env.SENDFROMEMAIL,
		pass: process.env.GMAIL_APP_PASSWORD,
		to: email,
		from: `Connie Cahill <${process.env.SENDFROMEMAIL}>`,
		text: emailBody,
		subject,
		attachments,
	};
	if (song !== 'null') {
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
	}
};
