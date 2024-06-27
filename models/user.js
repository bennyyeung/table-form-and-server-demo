const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     username: {
//         type: String,        
//     },
//     //password not hashed yet
//     password: {
//         type: String,
//         unique: true
//     },
//     address: {
//         type: String,
//     },
//     sports: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     },
//     ageGroup: {
//         type: String,
//     },
//     photo: {
//         type: String,
//     }
// });

const UserSchema = new Schema({
    username: String,
    password: String,
    address: String,
    sports: String,
    gender: String,
    ageGroup: String
});

module.exports = mongoose.model('User', UserSchema);