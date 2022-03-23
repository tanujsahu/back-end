require('dotenv').config();

const express = require("express");
app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ limit: "5MB" }));

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log("Server Start On Port::)", port)
})
