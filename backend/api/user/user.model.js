const mongooose = require('mongoose');

const UserSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    last: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    offeredServices: Array,
    purchasedServices: Array,
    avatar: String
},
{ timestamps: true },
{ versionKey: false });

const User = mongooose.model('User', UserSchema);
module.exports = User;

