const mongoose = require('mongoose');

module.exports = () => {
    const connection = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.connect(process.env.DB_CONNECTION, connection)
        .then(() => console.log('Connected to MongoDB...'))
        .catch((error) => console.log('Error connecting to MongoDB:', error.message));
};
