const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    password:{
        type: String,
        required: [false],
    },
});
module.exports = mongoose.model('password',PostSchema);
