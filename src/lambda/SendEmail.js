const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');
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
	const options = {
		user: process.env.SENDFROMEMAIL,
		pass: process.env.aulcwufziyrlcoct,
		to: 'brandon@reddirtwebdesign.com',
		from: process.env.SENDFROMEMAIL,
		subject: `Purchase Of ${song} From Connie Cahill`,
		text: emailBody,
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
