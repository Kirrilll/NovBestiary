const router = require('express').Router()
const Home = require('../models/Home')

router.post('/', async (req, res) => {
    const newHome = new Home(req.body)
    try {
        const saveHome = await newHome.save()
        res.status(200).json(saveHome)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const homes = await Home.find()
        res.status(200).json(homes)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router