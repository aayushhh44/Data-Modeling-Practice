const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: name
    },
    diagnosedWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O'],
        required: true
    },
    addmittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Hospital',
    }
},{timestamps:true})


module.exports = mongoose.model('Patient', patientSchema)