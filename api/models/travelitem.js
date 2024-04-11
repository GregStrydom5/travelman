const { db } = require('../../util/admin');

const getAllTravelItems = async (req, res) => {
    const travelItemsRef = db.collection('travelItems');
    try{
        travelItemsRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(data);
            return res.status(200).json(data);
        })
    } catch (error) {
        return res
            .status(500)
            .json({ general: "Something went wrong, could not get travel item list. Please try again"});
    }
};

const getTravelItemById = async (req, res) => {
    const travelItemRef = db.collection('travelItems').doc(req.params.id);
    try{
        travelItemRef.get().then((snapshot) => {
            const data  = snapshot.data()
            res.status(200).json(data);
        })
    } catch (error) {
        return res
            .status(500)
            .json({ general: "Something went wrong, could not get travel item by ID. Please try again", error: error.message });
    }
}

const createTravelItem = async (req, res) => {
    const travelItemsRef = db.collection('travelItems');
}

module.exports = {
    // GET requests
    getAllTravelItems,
    getTravelItemById,

    // POST requests
    createTravelItem
}
