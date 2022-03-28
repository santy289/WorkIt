const mongooose = require('mongoose');

const URI = process.env.MONGODB_URI;

async function connectDB() {
    try {
        await mongooose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database is ONLINE');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;