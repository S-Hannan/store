require('dotenv').config();
// const mongoose = require('mongoose')
const jsonProducts = require('./singleproduct.json');
const Product = require('./models/product');
const connectDB = require('./db/connect');
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log(jsonProducts);
        // await Product.deleteMany()
        await Product.create(jsonProducts);

    } catch (err) {
        console.log(err);

    }

};
start();
