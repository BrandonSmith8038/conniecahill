const { setAttachments, setSubject } = require('../utils');
const dotenv = require('dotenv').config();
const mailer = require('nodemailer-promise');

exports.handler = (event, context, callback) => {
	const data = JSON.parse(event.body);
	const { name, email, song } = data;
	const attachments = setAttachments(song);
	const subject = setSubject(song);
	const emailBody = `
  ${name},
  Thank you very much for your puchase! Here is your song to download
	`;
	console.log({ data: data });
	console.log({ name, email, song });
	// console.log({ song, attachments, subject });

	const sendEmail = mailer.config({
		service: 'gmail',
		auth: {
			user: process.env.SENDFROMEMAIL,
			pass: process.env.GMAIL_APP_PASSWORD,
		},
	});

	const options = {
		user: process.env.SENDFROMEMAIL,
		pass: process.env.aulcwufziyrlcoct,
		to: email,
		from: process.env.SENDFROMEMAIL,
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
