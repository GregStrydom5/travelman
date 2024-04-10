const { db } = require('../../util/admin');

exports.books = async (req, res) => {
    const travelItemsRef = db.collection('TravelItems');
    try{
        travelItemsRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
            .status(500)
            .json({ general: "Something went wrong, please try again"});
    }
};




// const mongoose = require('mongoose')
//
// const travelItemSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     title: String,
//     date: Date,
//     startPlace: String,
//     endPlace: String,
//     timeTravelled: String,
//     distanceTravelled: String
// })
//
// module.exports = mongoose.model('TravelItem', travelItemSchema)