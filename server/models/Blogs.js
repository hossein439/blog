const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
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
        required: true,
        ref: 'User',
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'Category'
    },
    date: {
        type: Date,
        default: Date.now
    },
    hidden: Boolean,
});



const Blog = model('Blog', blogSchema);

module.exports = Blog;