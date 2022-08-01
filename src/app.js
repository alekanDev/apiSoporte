
// Modulo para crear el servicio y la ejecución de rutas
const express = require('express')
// Modulo para realizar conexión con la base de datos mongo
const mongoose = require('mongoose')
// Modulo para informar los verbos de y los estados http
const morgan = require('morgan')
// Modulo para dar permisos de consulta sobre la api
const cors = require('cors')

// Modulo para crear variables de entorno y hacer un poco mas segura la app
require('dotenv').config()

const path = require('path')
const app = express()
const port = process.env.PORT || 5000
const userRoutes = require('./routes/usersRoutes')
const deviceRoutes = require('./routes/devicesRoutes')
const companyRoutes = require('./routes/companiesRoutes')

// server
app.listen(port, () => {
    console.log('The server is running in port ', port)
})

app.use(morgan('dev'))

// middleware
// app.use(function (req,res, next) {
//     res.header('Access-Control-Allow_Origins','*')
// })
app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', deviceRoutes)
app.use('/api', companyRoutes)

//conexion a mongoDB
mongoose
.connect(process.env.mongoURI)
.then(() => {
    console.log('Conected to mongoDB')
}).catch((err) => console.log(err))

// routes
// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, './index.html'))
// })