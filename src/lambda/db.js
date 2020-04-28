import mongoose from 'mongoose';
const dotenv = require('dotenv').config();
const dbUrl = process.env.DB_URL;

const dbOptions = {
	useNewUrlParser: true,
	useFindAndModify: false,
};

mongoose.connect(dbUrl, dbOptions);
console.log('DB Connected');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

export default db;
