const REACHESSMODEL = require("../model/reachesModel");

const create_reaches = async (req, res) => {
  const { 
    firstName,
    lastName,
    email,
    mobile,
    message 
} = req.body;
  try {
    const createData = await REACHESSMODEL.create({
      firstName,
      lastName,
      email,
      mobile,
      message
    });
    res.status(200).json({ message: "Reaches posted successfully", createData });
  } catch (error) {
    res.status(400).json({ message: "Reaches posted failed" });
  }
};

const delete_reaches = async (req, res) => {
  try {
    const deleteData = await REACHESSMODEL.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Reaches Deleted Successfully", deleteData });
  } catch (error) {
    res.status(400).json({ message: "Can't delete Reaches" });
  }
};

const get_reaches = async (req, res) => {
  try {
    const getData = await REACHESSMODEL.find();
    res.status(200).json(getData);
  } catch (error) {
    res.status(400).json({ message: "Reaches Not Found" });
  }
};

const update_reaches = async (req, res) => {
  try {
    const updateData = await REACHESSMODEL.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ message: "Reaches Updated Successfully", updateData });
  } catch (error) {
    res.status(400).json({ message: "Can't update Reaches" });
  }
};

const getId_reaches = async (req, res) => {
  try {
    const getById = await REACHESSMODEL.findById(req.params.id);
    res.status(200).json(getById);
  } catch (error) {
    res.status(400).json({ message: "Can't find Reaches" });
  }
};

module.exports = {
    create_reaches,
    delete_reaches,
    update_reaches,
    getId_reaches,
    get_reaches
}