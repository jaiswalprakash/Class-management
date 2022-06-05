const mongoose = require('mongoose');

const constant = require('../utils/constant');
const Schema = mongoose.Schema;

// Create Schema objects for User
const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    id: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:constant.ROLE
    }
}, {
    timestamps: true
});



module.exports = mongoose.model(constant.MODEL_NAME.USER, userSchema); //Compiling schema to model