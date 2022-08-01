const express = require('express')

const router = express.Router()
const companySchema = require('../schemas/companySchema')

router.post('/companies', (req, res) => {
    const company = companySchema(req.body)
    company
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

router.get('/companies', (req, res) => {
    companySchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

router.get('/companies/:id', (req, res) => {
    const { id } = req.params
    companySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

router.put('/companies/:id', (req, res) => {
    const { id } = req.params
    const {name, address, country, keywords} = req.body
    companySchema
    .updateOne({_id:id}, {$set: {name, address, country, keywords}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

router.delete('/companies/:id', (req, res) => {
    const { id } = req.params
    companySchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

module.exports = router