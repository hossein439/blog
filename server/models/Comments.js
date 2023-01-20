const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    body: {
        type: String,
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now
    },
    hidden: Boolean,
    
}, {
    timestamps: true    
});