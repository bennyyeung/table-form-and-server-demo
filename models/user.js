const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,        
    },
    //password not hashed yet
    password: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    sports: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    ageGroup: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema);