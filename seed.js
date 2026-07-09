const mongoose = require('mongoose');
const Category = require('./models/Category');
const Product = require('./models/Product');

const seedDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mariam:00.00.00@cluster0.4rvi0sr.mongodb.net/my-store-api?retryWrites=true&w=majority&appName=Cluster0');

        await Category.deleteMany();
        await Product.deleteMany();

        const electronics = await Category.create({ name: 'Electronics' });
        const books = await Category.create({ name: 'Books' });

        await Product.create([
            { name: 'Laptop', price: 999, category: electronics._id },
            { name: 'Smartphone', price: 499, category: electronics._id },
            { name: 'Node.js Guide', price: 29, category: books._id }
        ]);

        console.log('Database Seeded Successfully!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedDB();