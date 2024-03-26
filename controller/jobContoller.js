const JOBSMODEL = require("../model/jobModel");

const create_job = async (req, res) => {
  const { title, subtitle, content, location, job_type, date } = req.body;
  try {
    const createData = await JOBSMODEL.create({
      title,
      subtitle,
      content,
      location,
      job_type,
      date,
    });
    res.status(200).json({ message: "Job posted successfully", createData });
  } catch (error) {
    res.status(400).json({ message: "Job posted failed" });
  }
};

const delete_job = async (req, res) => {
  try {
    const deleteData = await JOBSMODEL.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Job Deleted Successfully", deleteData });
  } catch (error) {
    res.status(400).json({ message: "Can't delete Job" });
  }
};

const get_job = async (req, res) => {
  try {
    const getData = await JOBSMODEL.find();
    res.status(200).json(getData);
  } catch (error) {
    res.status(400).json({ message: "Job Not Found" });
  }
};

const update_job = async (req, res) => {
  try {
    const updateData = await JOBSMODEL.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ message: "Job Updated Successfully", updateData });
  } catch (error) {
    res.status(400).json({ message: "Can't update Job" });
  }
};

const getId_job = async (req, res) => {
  try {
    const getById = await JOBSMODEL.findById(req.params.id);
    res.status(200).json(getById);
  } catch (error) {
    res.status(400).json({ message: "Can't find Job" });
  }
};

module.exports = {
    create_job,
    delete_job,
    update_job,
    getId_job,
    get_job
}