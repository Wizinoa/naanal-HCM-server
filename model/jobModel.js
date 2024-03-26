const mongoose = require('mongoose')

const jobScheme = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    subtitle:  {
        type : String,
        require : true
    },
    content :  {
        type : String,
        require : true
    },
    location :  {
        type : String,
        require : true
    },
    job_type:  {
        type : String,
        require : true
    },
    date :  {
        type : String,
        require : true
    }
})

module.exports = mongoose.model("Jobs", jobScheme)