const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        },
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    readingList: {
        type: Array,
    },
    roles: {
        type: String,
        trim: true,
        lowercase: true,
        default: 'admin'
    },
    bio: {
        type: String
    },
    location: {
        type: String
    },
    work: {
        type: String
    },
    education: {
        type: String
    },
    token: {
        type: String,
        trim: true,
        required: true
    },
    avatar: {
        type: String,
    }
}, {
    timestamps: true
});


userSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'author'
})

userSchema.methods.generateAuthToken = function() {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()} , 'nodemevnstack');
    user.token = token;
    user.save();
    return token;
}

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.__v;
    delete userObject.token;    
    return userObject;
}

userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({email});
    if(!user) {
        throw 'Unable to login please check your password or email !';
    }
    
    const isMatchPass = await bcrypt.compare(password, user.password);
    if(!isMatchPass) {
        throw 'Unable to login please check your password or email !';
    }

    return user;
}

userSchema.pre('save', async function (next) {
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

const User = model('User', userSchema);

module.exports = User;