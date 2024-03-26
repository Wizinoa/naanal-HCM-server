const NEWSLETTERMODEL = require("../model/newsletterModel");

const create_newsletter = async (req, res) => {
  const { email } = req.body;
  try {
    const createData = await NEWSLETTERMODEL.create({
     email
    });
    res.status(200).json({ message: "News Letter posted successfully", createData });
  } catch (error) {
    res.status(400).json({ message: "News Letter posted failed" });
  }
};

const delete_newsletter = async (req, res) => {
  try {
    const deleteData = await NEWSLETTERMODEL.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "News Letter Deleted Successfully", deleteData });
  } catch (error) {
    res.status(400).json({ message: "Can't delete News Letter" });
  }
};

const get_newsletter = async (req, res) => {
  try {
    const getData = await NEWSLETTERMODEL.find();
    res.status(200).json(getData);
  } catch (error) {
    res.status(400).json({ message: "News Letter Not Found" });
  }
};

const update_newsletter = async (req, res) => {
  try {
    const updateData = await NEWSLETTERMODEL.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ message: "News Letter Updated Successfully", updateData });
  } catch (error) {
    res.status(400).json({ message: "Can't update News Letter" });
  }
};

const getId_newsletter = async (req, res) => {
  try {
    const getById = await NEWSLETTERMODEL.findById(req.params.id);
    res.status(200).json(getById);
  } catch (error) {
    res.status(400).json({ message: "Can't find News Letter" });
  }
};

module.exports = {
    create_newsletter,
    delete_newsletter,
    update_newsletter,
    getId_newsletter,
    get_newsletter
}