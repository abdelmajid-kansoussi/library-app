const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  let books = [];
  try {
    books = await books.find().sort({ createdAt: "desc" }).limit(10).exec();
  } catch (e) {
    books = [];
  }
  res.render("index", { books: books });
});

module.exports = router;
