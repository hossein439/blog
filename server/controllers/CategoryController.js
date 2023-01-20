const Category = require('../models/Categories');

module.exports = {

    async create(req, res) {
        try {
            const category = new Category(req.body);
            await category.save()
            res.send({
                category
            })
        } catch (err) {
            res.status(500).send(err)
        }
    },

    async index(req, res) {
        try {
            const categories = await Category.find();
            res.status(200).send(categories)
        } catch (err) {
            res.status(404).send(err)
        }
    },

    async update(req, res) {
        try {
            
        } catch (err) {
            res.status(404).send(err)
        }
    },

    async read(req, res) {
        try {
            const category = await Category.findById(req.params.id);
            if(!category) {
                return res.status(404).send('category not found');
            }
            res.status(200).send(category);
        } catch (err) {
            res.status(404).send(err)
        }
    },

    async delete(req, res) {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            res.status(200).send(category);
        } catch (err) {
            res.status(404).send(err)
        }
    },

}