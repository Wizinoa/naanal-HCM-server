const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');

// CONTROLLERS
const adminRouter = require("./router/adminRouter")
const jobsRouter = require("./router/jobRouter")
const candidateRouter = require("./router/candidateRouter")
const reachesRouter = require("./router/reachesRouter")
const newsLetterRouter = require("./router/newsLetterRouter")


const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173","https://res.cloudinary.com/"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

//  ADMIN API
app.use("/api/admin",adminRouter)

// JOBS API
app.use("/api/jobs",jobsRouter)

// CANDIDATE API
app.use("/api/candidates",candidateRouter)

// REACHES API
app.use("/api/reaches",reachesRouter)

// NEWSLETTER API
app.use("/api/newsletter",newsLetterRouter)


mongoose
  .connect(process.env.DB_LINK)
  .then(app.listen(process.env.PORT, () => { console.log("SERVER IS RUNNING"); })
  )
  .catch((err) => console.log(err));