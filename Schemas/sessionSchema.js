const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    sessionID:{
        type: String,
        required: [false],
    },
    username:{
        type: String,
        required: [false],
    },
    time:{
        type: String,
        required: [true],
    },
});
module.exports = mongoose.model('sessions',PostSchema);