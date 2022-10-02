const { Router } = require('express');
const router = Router();
const { 
    getAllGroceries, 
    insertGrocery,
    updateGrocery,
    deleteGrocery,
} = require('../Controllers/Grocery');

router.get('/', getAllGroceries);
router.post('/', insertGrocery)
router.put('/:id', updateGrocery);
router.delete('/:id', deleteGrocery)

module.exports = router;