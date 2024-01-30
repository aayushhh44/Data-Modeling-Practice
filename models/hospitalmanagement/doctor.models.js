const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type: String,
        required: true,
    },
    qualifications:{
        type:String,
        required: true,
    },
    experienceInYears:{
        type: Number,
        default: 0
    },
    worksInHospitals:[
        {
            type: mongoose.Types.ObjectId,
            ref:'Hospital'
        }
    ]
},{timestamps:true})


module.exports = mongoose.model('Doctor', DoctorSchema)