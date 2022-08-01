const express = require('express')

const router = express.Router()
const userSchema = require('../schemas/userSchema')

router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

router.get('/users/:username', (req, res) => {
    const { username } = req.params
    userSchema
    .find({username:username})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

router.put('/users/:username', (req, res) => {
    const { username } = req.params
    const { name, lastname, pass, email, phone, area, rol} = userSchema(req.body)
    userSchema
    .updateOne({ username:username }, {$set: { name, lastname, pass, email, phone, area, rol}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

router.delete('/users/:username', (req, res) => {
    const { username } = req.params
    userSchema
    .deleteOne({ username:username })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router