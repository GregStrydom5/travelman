var express = require('express');
var app = express();
const PORT = process.env.PORT || 5050;
const multer = require("multer");
const {admin} = require("./util/admin");
const db = admin.firestore();

const { getAllTravelItems, getTravelItemById } = require('./api/models/travelitem')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        console.log('Unsupported file type tried to upload.')
        cb(null, false);
    }
}

const upload = multer({storage: storage, limits: {fileSize: 1024 * 1024 * 5}, fileFilter: fileFilter});

const morgan = require('morgan');
const bodyParser = require('body-parser')

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json()
    }
    next()
})

app.get('/travelItems', getAllTravelItems)
app.get('/travelItems/:id', getTravelItemById)

app.listen(PORT, function () {
    console.log(`Server running at: ${PORT}`);
});