const router = require('express').Router();
const {User, validateUser} = require('../models/user');
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    console.log("Received request:", req.body);
    try {
        const {error} = validateUser(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({email: req.body.email});
        if (user) return res.status(400).send('User already registered.');

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        await new User({firstName: req.body.firstName,lastName: req.body.lastName,email: req.body.email,username: req.body.username,password: hashedPassword,}).save();
        res.status(200).send({message: 'User created.'});
    } catch (error) {
        console.error("Error while registering user:", error); // <-- Log errors for debugging
        res.status(500).send(error.message);
    }
});

module.exports = router;