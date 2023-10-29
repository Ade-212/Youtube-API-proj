const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {User} = require('../models/user');
const Joi = require('joi');

router.post("/", async (req, res) => {
    try {
        const{error} = validateUser(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({username: req.body.username});
        if (!user) return res.status(401).send('Invalid username or password.');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).send('Invalid email or password.');

        const token = user.generateAuthToken();
        res.status(200).send({data: token, message: 'User logged in.'});
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const validateUser = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(255).required().label('Username'),
        password: Joi.string().min(6).max(1024).required().label('Password'),
    });
    return schema.validate(data);
}

module.exports = router;