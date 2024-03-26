const express = require("express");
const jobRouter = express.Router();
const {
  create_job,
  delete_job,
  getId_job,
  get_job,
  update_job,
} = require("../controller/jobContoller");

jobRouter.post("/create-job",create_job);
jobRouter.get("/getsingle-job/:id",getId_job);
jobRouter.get("/get-job",get_job);
jobRouter.put("/update-job/:id",update_job);
jobRouter.delete("/delete-job/:id",delete_job);

module.exports = jobRouter;
