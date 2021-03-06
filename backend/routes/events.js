const router = require('express').Router()
const Event = require('../models/Event')

router.post('/', async (req, res) => {
    const newEvent = new Event(req.body)
    try {
        const saveEvent = await newEvent.save()
        res.status(200).json(saveEvent)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const events = await Event.find()
        res.status(200).json(events)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router