const mongoose = require('mongoose');

const constant = require('../utils/constant');
const Schema = mongoose.Schema;

// Create Schema objects for User
const teacherClassSchema = new Schema({
    class: {
        type: Schema.Types.ObjectId,
        ref: 'class',
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
        default: Date.now()
    },
    batch: {
        type: Schema.Types.ObjectId,
        ref: 'batches',
    },
}, {
    timestamps: true
});



module.exports = mongoose.model(constant.MODEL_NAME.TEACHER_CLASS, teacherClassSchema); //Compiling schema to model