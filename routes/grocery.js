const express = require('express');
const groceryController = require('../controllers/grocery');
const router = express.Router();


router.get('/', groceryController.getAllGroceries);
router.post('/', groceryController.insertGrocery);
router.get('/:id',groceryController.getSingleGrocery);
router.put('/:id', groceryController.updateGrocery);
router.delete('/:id', groceryController.deleteGrocery);


module.exports = router;