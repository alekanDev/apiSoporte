const express = require('express')

const router = express.Router()
const deviceSchema = require('../schemas/deviceSchema')

router.post('/devices/', (req, res) => {
    const device = deviceSchema(req.body)
    device
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

router.get('/devices/', (req, res) => {
    deviceSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

router.get('/devices/:keywords', (req, res) => {
    const {keywords} = req.params
    deviceSchema
    .findOne({keywords:keywords})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

router.put('/devices/:id', (req, res) => {
    const {id} = req.params
    const {name, type, pid, city, vpn, anydesk, board, camera, serialCamera, ocrCamera, externalCamera, ipExternalCamera, versionCubiQ, versionCubiqQ_one, versionMiddelware, keywords} = req.body
    deviceSchema
    .updateOne({_id:id}, {$set: {name, type, pid, city, vpn, anydesk, board, camera, serialCamera, ocrCamera, externalCamera, ipExternalCamera, versionCubiQ, versionCubiqQ_one, versionMiddelware, keywords}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

router.delete('/devices/:id', (req, res) => {
    const {id} = req.params
    deviceSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}))
})

module.exports = router