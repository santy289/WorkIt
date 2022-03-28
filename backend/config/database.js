const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

async function connectDB(){
    try {
        await mongoose.connect(url);
        console.log('DB connected');
    }    
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;