const express = require("express");
const newsLetterRouter = express.Router();
const {
  create_newsletter,
  delete_newsletter,
  getId_newsletter,
  get_newsletter,
  update_newsletter
} = require("../controller/newsLetterController");

newsLetterRouter.post("/create-newsLetter",create_newsletter);
newsLetterRouter.get("/getsingle-newsLetter/:id",getId_newsletter);
newsLetterRouter.get("/get-newsLetter",get_newsletter);
newsLetterRouter.put("/update-newsLetter/:id",update_newsletter);
newsLetterRouter.delete("/delete-newsLetter/:id",delete_newsletter);

module.exports = newsLetterRouter;
