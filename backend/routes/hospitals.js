const router = require('express').Router()
const Hospital = require('../models/Hospital')

router.post('/', async (req, res) => {
    const newHospital = new Hospital(req.body)
    try {
        const saveHospital = await newHospital.save()
        res.status(200).json(Hospital)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const hospitals = await Hospital.find()
        res.status(200).json(hospitals)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router