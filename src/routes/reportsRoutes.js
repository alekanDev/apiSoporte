const express = require('express')

const router = express.Router()
const reportSchema = require('../schemas/reportSchema')

router.post('/reports', (req, res) => {
    const report = reportSchema(req.body)
    report
    .save()
    .then(data => res.json(data))
    .catch(err => res.json({messaje: err}))
})

module.exports = router