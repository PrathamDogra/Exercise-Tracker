const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
const app = express();
require('dotenv').config();
//As body-parser is inside the express
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useCreateIndex: true })
  .then(() =>
    console.log("The connection to MongoDB is established successfully")
  )
  .catch(err => console.log(err));

app.get("/app", (req, res) => {
  res.status(200).json("Hello World");
});
port = 5000;
app.listen(port, () => console.log(`Server is running at ${port}`));
