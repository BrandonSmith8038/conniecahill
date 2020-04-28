import mongoose, { Mongoose } from 'mongoose';
console.log('Order Models Called');

const schema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	payPalOrderID: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	song: {
		type: String,
		required: true,
	},
});

const Order = mongoose.model('orders', schema);

export default Order;
