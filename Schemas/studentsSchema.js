const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Course:{
            type: String,
            required: true
    },
    Year:{
            type: String,
            required: true
    }

});
module.exports = mongoose.model('Students',PostSchema);
