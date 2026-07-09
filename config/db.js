const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mariam:00.00.00@cluster0.4rvi0sr.mongodb.net/my-store-api?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Connection Error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;