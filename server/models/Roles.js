const mongoose = require('mongoose');
const validator = require('validator');
const { Schema, model } = mongoose;


const permissionSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        
    }
}, {
    timeseries: true,
});


const Permission = new model('Permission', permissionSchema);

module.exports = Permission;