const Grocery = require('../Models/Grocery');

const getAllGroceries = async (req, res) => {
    await Grocery.getAllGroceries()
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({status: 404, message: error.message})
    })
}

const insertGrocery = async (req, res) => {
    const item = req.body.item;
    if ( item.trim() !== '' ) {
        await Grocery.insertGrocery(item)
        .then(() => {
            res.json({status: 200, message: `item: '${item}' is inserted successfully`})
        })
        .catch(error => {
            res.json({status: 404, message: error.message})
        })
    } else {
        res.json({message: 'item is required'})
    }
}

const updateGrocery = async (req, res) => {
    const id = req.params.id
    const item = req.body.item;
    if ( item.trim() !== '' ) {
        await Grocery.updateGrocery(id, item)
        .then(() => {
            res.json({status: 200, message: `item is updated successfully`})
        })
        .catch(error => {
            res.json({status: 404, message: error.message})
        })
    } else {
        res.json({message: 'item is required'})
    }
} 

const deleteGrocery = async (req, res) => {
    const id = req.params.id
    await Grocery.deleteGrocery(id)
    .then(() => {
        res.json({status: 200, message: `item is deleted successfully`})
    })
    .catch(error => {
        res.json({status: 404, message: error.message})
    })
} 

module.exports = {
    getAllGroceries,
    insertGrocery,
    updateGrocery,
    deleteGrocery
}