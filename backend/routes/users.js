const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const user = await newUser.save()
        res.status(200).json(user._id)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!user || !validPassword) throw new Error('wrong username or password')

        res.status(200).json({_id: user._id, username: user.username})
    } catch (err) {
        if (err.message === 'wrong username or password' || err.message === 'Cannot read property \'password\' of null') {
            res.status(400).json('wrong username or password')
        } else {
            res.status(500).json(err)
        }
    }
})

module.exports = router