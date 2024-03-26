const express = require("express");
const candidateRouter = express.Router();
const multer = require("multer");
const {
  createcandidate,
  deletecandidate,
  getIdcandidate,
  getcandidate,
  updatecandidate,
} = require("../controller/candidateController");


// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Temporary storage for uploads before processing
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()); // Generate unique filenames
    },
  });
  
  const upload = multer({ storage });

candidateRouter.post("/create-candidate",upload.single("resume"),createcandidate);
candidateRouter.get("/getsingle-candidate/:id",getIdcandidate);
candidateRouter.get("/get-candidate",getcandidate);
candidateRouter.put("/update-candidate/:id",updatecandidate);
candidateRouter.delete("/delete-candidate/:id",deletecandidate);

module.exports = candidateRouter;
