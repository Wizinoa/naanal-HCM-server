const express = require("express");
const reachesRouter = express.Router();
const {
  create_reaches,
  delete_reaches,
  getId_reaches,
  get_reaches,
  update_reaches,
} = require("../controller/reachesController");

reachesRouter.post("/create-reaches",create_reaches);
reachesRouter.get("/getsingle-reaches/:id",getId_reaches);
reachesRouter.get("/get-reaches",get_reaches);
reachesRouter.put("/update-reaches/:id",update_reaches);
reachesRouter.delete("/delete-reaches/:id",delete_reaches);

module.exports = reachesRouter;
