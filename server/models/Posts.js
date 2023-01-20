const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        trim: true,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: false
    },
    bookedBy: {
        type: Array,
    },
    likedBy: {
        type: Array,
    },
}, {
    timestamps: true
});

const Post = model('Post', postSchema);

module.exports = Post;