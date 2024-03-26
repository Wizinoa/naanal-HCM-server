const CANDIDATESMODEL = require("../model/candidateModel");
const cloudinary = require("cloudinary").v2;
const fs = require('fs')

cloudinary.config({
  cloud_name: "ddu4zjoy9",
  api_key: "533622344259116",
  api_secret: "bbZeLcBNqsU5M7px4USKKWSYI3o",
});

const createcandidate = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    department,
    gender,
    experience,
    current_ctc,
    expected_ctc,
    notice_period,
    media,
    location
  } = req.body;

  try {
    console.log()
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
      public_id: firstName,
    });

    const newPolicy = new CANDIDATESMODEL({
        firstName,
        lastName,
        email,
        phone,
        department,
        gender,
        experience,
        current_ctc,
        expected_ctc,
        notice_period,
        media,
        location,
        resume: uploadResult.secure_url
    });
    await newPolicy.save();

    res.status(201).json({ message: "Candidate created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating Candidate" });
  }
};

const deletecandidate = async (req, res) => {
  try {
    const deleteData = await CANDIDATESMODEL.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "Candidate Deleted Successfully", deleteData });
  } catch (error) {
    res.status(400).json({ message: "Can't delete candidate" });
  }
};

const getcandidate = async (req, res) => {
  try {
    const getData = await CANDIDATESMODEL.find();
    res.status(200).json(getData);
  } catch (error) {
    res.status(400).json({ message: "Candidate Not Found" });
  }
};

const updatecandidate = async (req, res) => {
  try {
    const updateData = await CANDIDATESMODEL.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ message: "Candidate Updated Successfully", updateData });
  } catch (error) {
    res.status(400).json({ message: "Can't update Candidate" });
  }
};

const getIdcandidate = async (req, res) => {
  try {
    const getById = await CANDIDATESMODEL.findById(req.params.id);
    res.status(200).json(getById);
  } catch (error) {
    res.status(400).json({ message: "Can't find Candidate" });
  }
};

module.exports = {
  createcandidate,
  deletecandidate,
  updatecandidate,
  getIdcandidate,
  getcandidate,
};
