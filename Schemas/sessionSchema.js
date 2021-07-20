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
    accessToken:{
        type: String,
        required: [true, 'Please Enter username']
    },
});
module.exports = mongoose.model('sessions',PostSchema);