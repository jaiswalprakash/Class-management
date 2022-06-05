const mongoose = require('mongoose');

const constant = require('../utils/constant');
const Schema = mongoose.Schema;

// Create Schema objects for User
const studentClassSchema = new Schema({
    class: {
        type: Schema.Types.ObjectId,
        ref: 'class',
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    batch: {
        type: Schema.Types.ObjectId,
        ref: 'batches',
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
}, {
    timestamps: true
});



module.exports = mongoose.model(constant.MODEL_NAME.STUDENT_CLASS, studentClassSchema); //Compiling schema to model