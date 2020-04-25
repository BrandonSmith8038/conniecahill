const axios = require('axios');

exports.handler = function (event, context, callback) {
	const parsedBody = JSON.parse(event.body);
	console.log(parsedBody);

	axios({
		method: 'post',
		url: 'https://enqe0ydz51bs.x.pipedream.net',
		data: { name: parsedBody.name },
	})
		.then((res) => {
			console.log(res);
			callback(null, {
				statusCode: 202,
				body: 'Yay It Worked',
			});
		})
		.catch((err) => {
			console.log(err);
			callback(new Error('Something Went Wrong'));
		});
};
