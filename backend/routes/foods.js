const router = require('express').Router()
const Food = require('../models/Food')

router.post('/', async (req, res) => {
    const newFood = new Food(req.body)
    try {
        const saveFood = await newFood.save()
        res.status(200).json(saveFood)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const foods = await Food.find()
        res.status(200).json(foods)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router