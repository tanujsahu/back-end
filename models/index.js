const config = require('../config');
const mongoose = require('mongoose');
const db = {}

db.mongoose = mongoose;
db.url = config.mongoUrl;
db.mongoose.connect(db.url,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("Connected DB")
}).catch((error) => {
    console.log("Can't Connected DB", error);
    process.exit();
})

db.Client = require("../models/client")(mongoose);
module.exports = db;
