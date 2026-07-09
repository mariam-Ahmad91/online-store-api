const express = require('express');
const connectDB = require('./config/db');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.use(errorMiddleware);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});