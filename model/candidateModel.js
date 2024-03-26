const mongoose  = require('mongoose')

const candidateSchema = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : String
    },
    department : {
        type : String,
        require : true
    },
    gender : {
        type : String
    },
    experience : {
        type : String
    },
    current_ctc:{
        type : String
    },
    expected_ctc : {
        type : String
    },
    notice_period : {
        type : String
    },
    media : {
        type : String
    },
    location : {
        type : String
    },
    resume : {
        type : String
    },

})

module.exports = mongoose.model("Candidates", candidateSchema)