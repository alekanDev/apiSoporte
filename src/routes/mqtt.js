const express = require('express')
const mqtt  = require('mqtt')

const router = express.Router()

function eventPublic(pub) {
  try {
    const client = mqtt.connect('mqtt://10.8.0.216')
    client.on('connect', function () {
      client.publish('supportCubiQ/testAPI', pub)
      client.end()

    }) 
  } catch (error) {
    console.log(error);
    return res.json({
      message: error
    })
  }
}

router.post('/public', async (req, res) => {
  const pub = req.body
  await eventPublic(pub['message'])
  res.json(pub['message'])
});


module.exports = router