const express = require('express');



module.exports = router



// const express = require('express');
// const router = express.Router()
// const mongoose = require("mongoose");
// const multer = require("multer");
//
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./uploads/")
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// })
//
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
//         cb(null, true);
//     } else {
//         console.log('Unsupported file type tried to upload.')
//         cb(null, false);
//     }
// }
//
// const upload = multer({storage: storage, limits: {fileSize: 1024 * 1024 * 5}, fileFilter: fileFilter});
//
// const TravelItem = require('../models/travelItems')
//
// router.post(
//     '/',
//     () => {
//         // Check for user directory and set path there
//
//         // Upload image to directory
//         upload.single('travelItemImage')
//     },
//     (req, res, next) => {
//         const travelItem = new TravelItem({
//             _id: new mongoose.Types.ObjectId(),
//             title: req.body.title,
//             date: req.body.date,
//             startPlace: req.body.startPlace,
//             endPlace: req.body.endPlace,
//             timeTravelled: req.body.timeTravelled,
//             distanceTravelled: req.body.distanceTravelled,
//         })
//         travelItem.save()
//             .then(result => {
//                 res.status(201).json({
//                     message: 'Travel Item added',
//                     createdItem: {
//                         _id: result._id,
//                         title: result.title,
//                         date: result.date,
//                         startPlace: result.startPlace,
//                         endPlace: result.endPlace,
//                         timeTravelled: result.timeTravelled,
//                         distanceTravelled: result.distanceTravelled,
//                         request: {
//                             type: 'POST',
//                             url: '127.0.0.1:3000/travelItems/' + result._id
//                         }
//                     }
//                 })
//             })
//         }
//     )
//
// router.get(
//     '/',
//     (req, res, next) => {
//        TravelItem.find()
//            .select('title date startPlace endPlace totalTimeTravelled')
//            .exec()
//            .then(docs => {
//                const response = {
//                    count: docs.length,
//                    travelItems: docs.map((doc) => {
//                        return {
//                             _id: doc._id,
//                             title: doc.title,
//                             date: doc.date,
//                             startPlace: doc.startPlace,
//                             endPlace: doc.endPlace,
//                             totalTimeTravelled: doc.totalTimeTravelled,
//                             request: {
//                                 type: 'GET',
//                                 url: '127.0.0.1:3000/travelItems/' + doc._id
//                             }
//                        }
//                    })
//                }
//                res.status(200).json(response)
//            })
//     }
// )
//
// router.get(
//     '/:travelItemId',
//     (req, res, next) => {
//         const id = req.params.travelItemId
//         TravelItem.findById(id)
//             .select('_id title date startPlace endPlace totalTimeTravelled')
//             .exec()
//             .then(doc => {
//                 if (doc) {
//                     res.status(200).json(doc)
//                 } else {
//                     res.status(404)
//                 }
//             })
//     }
// )
//
// router.patch(
//     '/:travelItemId',
//     (req, res, next) => {
//         const id = req.params.travelItemId
//         TravelItem.update({_id: id}, {$set: updateOps})
//             .exec()
//             .then(result => {
//                 res.status(200).json({
//                     message: 'Travel Item updated',
//                     request: {
//                         type: 'GET',
//                         url: '127.0.0.1:3000/travelItems/' + id
//                     }
//                 })
//             })
//     }
// )
//
// router.delete(
//     '/:travelItemId',
//     (req, res, next) => {
//         const id = req.params.travelItemId
//         TravelItem.remove({_id: id})
//             .exec()
//             .then(result => {
//                 res.status(200).json({
//                     message: 'Travel Item deleted',
//                     request: {
//                         type: 'POST',
//                         url: '127.0.0.1:3000/travelItems/' + id
//                     }
//                 })
//             })
//     }
// )
//
// module.exports = router
