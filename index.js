const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');


const groceryRoutes = require('./routes/grocery');
const errorsController = require('./controllers/errors');

const app = express();


const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


app.use("/groceries", groceryRoutes);

app.use(errorsController.get404);
app.use(errorsController.get500);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
