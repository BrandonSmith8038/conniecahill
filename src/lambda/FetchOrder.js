import mongoose from 'mongoose';

import db from './db';
import Order from './Orders-Model';

exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const orders = await Order.find(),
			response = {
				msg: 'Orders found successfully',
				orders,
			};
		return {
			statusCode: 200,
			body: JSON.stringify(response),
		};
	} catch (err) {
		console.error(err);
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err }),
		};
	}
};
