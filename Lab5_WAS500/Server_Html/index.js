const mongoose = require("mongoose");
const express = require('express');
const app = express();
app.set('views', './Views');
app.set('view engine', 'ejs');
const Controller = require('./Controllers/Controller1');

app.use('/Public/images', express.static('./Public/images'))

mongoose.connect(
  "mongodb+srv://Omar:WAS500@was500.pvqj6ck.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Ah! connected to MongoDB using Mongoose!!");
});

app.listen(3000, function(req, res) {
  console.log("Connected on port:3000");
});

app.use(express.json());
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/BooksList", (req, res) => {
  res.render("Books");
});

app.get("/bookslist/:_id", Controller.getBookID, (req, res) => {
  res.render('temp', {books: req.data})
});

// Error Page
app.get("*", (req,res) => {
  res.render("Error")
})