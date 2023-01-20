const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const categorySchema = new Schema({
    name: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

categorySchema.virtual('blogs',
{
    ref: 'Blog',
    localField: '_id',
    foreignField: 'category'
})

const Category = model('Category', categorySchema);

module.exports = Category;