const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: [true, 'First Name Field is Required']
    },
    last_name:{
        type: String,
        required: [true, 'Last Name Field is Required']
    },
    number1:{
        type: String,
        required: [true, 'First Number Field is Required']
    },  
    number2:{
        type: String,
    },
    number3:{
        type: String,
    },
});
module.exports = mongoose.model('students',PostSchema);
