const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
	const data = JSON.parse(event.body);
	const { name, email, song } = data;
	const emailBody = `
  ${name},
  Thank you very much for your puchase! Here is your song to download
  `;
	const transporter = nodemailer.createTransport({
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
	console.log({ options });
	transporter.sendMail(options, (err, res) => {
		if (err) {
			console.error(err);
			return {
				statusCode: 500,
				body: JSON.stringify({ msg: err }),
			};
		}
		console.log(res);
		return {
			statusCode: 200,
			body: JSON.stringify({ result, full }),
		};
	});
};
