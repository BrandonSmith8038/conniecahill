import mongoose from 'mongoose';

// Initialize The DB
import db from './db';

// Load The Order Mondel
import Order from './Orders-Model';

exports.handler = async (event, context) => {
	console.log('Saving Order To.......');
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const data = JSON.parse(event.body);
		const { payPalOrderID, name, email, song } = data;
		const id = mongoose.Types.ObjectId();
		const newOrder = {
			_id: id,
			payPalOrderID,
			name,
			email,
			song,
		};
		const response = {
			msg: 'Order Saved Successfully',
			data: newOrder,
		};
		// Use Order Model To Create A New Order
		await Order.create(newOrder);

		return {
			statusCode: 201,
			body: JSON.stringify(response),
		};
	} catch (err) {
		console.log('new-order.create', err); //Outputs to netlify function log
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }),
		};
	}
};
