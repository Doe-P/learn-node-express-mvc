const Grocery = require("../models/grocery");

exports.getAllGroceries = async (req, res, next) => {
  try {
    const [allGroceries] = await Grocery.fetchAllItems();
    res.status(200).json(allGroceries);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.insertGrocery = async (req, res, next) => {
  const item = req.body.item;
  try {
    const groceryItem = await Grocery.insertItem(item);
    res.status(200).json(groceryItem);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.getSingleGrocery = async (req, res, next) => {
  const id = req.params.id;
  try {
    const grocery = await Grocery.getSingleItem(id);
    res.status(200).json(grocery[0][0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateGrocery = async (req, res, next) => {
  const id = req.params.id;
  const item = req.body.item;
  try {
    const result = await Grocery.uppdateItems(id, item);
    res.status(200).json(result);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.deleteGrocery = async (req, res, next) => {
  const id = req.params.id;
  try {
    const grocery = await Grocery.deleteItem(id);
    res.status(200).json(grocery);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
