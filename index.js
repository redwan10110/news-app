const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Hello World! from nodemon");
});

// all the news Category
app.get("/categories", (req, res) => {
  res.send(categories);
});

// get specific news category based on id
app.get("/news-category/:id", (req, res) => {
  let id = req.params.id;

  if (id === "08") {
    res.send(news);
  } else {
    let selectedNews = news.filter((n) => n.category_id === id);
    res.send(selectedNews);
  }

});
// get a single news/blog item
app.get("/news/:id", (req, res) => {
  let id = req.params.id;
  let SelectedNews = news.find(n=> n._id === id);
  res.send(SelectedNews)
});

// Get all news/blog post
app.get("/all-news", (req, res) => {
  res.send(news);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
