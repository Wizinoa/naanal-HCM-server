const mongoose = require('mongoose')

const newsLetterScheme = new mongoose.Schema({
    email : {
        type : String,
        require : true
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Newsletter", newsLetterScheme)