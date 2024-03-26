const mongoose = require('mongoose')

const reachesScheme = new mongoose.Schema({
    firstName : {
        type : String,
        require : true
    },
    lastName:  {
        type : String,
        require : true
    },
    email :  {
        type : String,
        require : true
    },
    mobile :  {
        type : String,
        require : true
    },
    message:  {
        type : String,
        require : true
    }
}, { timestamps : true })

module.exports = mongoose.model("Reaches", reachesScheme)