const Roles = require('../models/Roles');

const data = [
    {
        name: 'create',
        description: '',
    },
    {
        name: 'update',
        description: '',
    },
    {
        name: 'read',
        description: '',
    },
    {
        name: 'delete',
        description: '',
    }
]

module.exports = {
    async create(req, res) {
        try{
            for(let i = 0; i < data.length; i++) {
                const role = new Roles(data[i]);
                await role.save();
            }
            res.send(role);
        } catch(err) {
            res.send(err)
        }
    }
}