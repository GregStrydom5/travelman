const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const password = process.env.MONGO_ATLAS_PW || '*INSERT PASSWORD*'

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const travelItemRoutes = require('./api/routes/travelitem')
const tripRoutes = require('./api/routes/trip')

const uri = "mongodb+srv://gregstrydom5:4PnhcpNpFGX4mIcF@travel.4dcgect.mongodb.net/?retryWrites=true&w=majority&appName=travel";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose.connect(uri, clientOptions)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json()
    }
    next()
})

app.use('/travelItems', travelItemRoutes)
app.use('/trip', tripRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
