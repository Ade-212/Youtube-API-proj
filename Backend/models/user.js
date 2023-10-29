const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    username: { type: String, 
        required: true, 
        unique: true, 
        minlength: 3, 
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.TOKEN_SECRET, {expiresIn: '7d'});
    return token;
};

const User = mongoose.model('User', userSchema);

const validateUser = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(255).required().label('First Name'),
        lastName: Joi.string().min(2).max(255).required().label('Last Name'),
        email: Joi.string().min(6).max(255).required().label('Email'),
        username: Joi.string().min(3).max(255).required().label('Username'),
        password: passwordComplexity().required().label('Password'),
    });
    return schema.validate(data);
};

module.exports = {User, validateUser};