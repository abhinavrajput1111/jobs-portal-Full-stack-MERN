import mongoose, { model } from "mongoose";

const jobSchema = new mongoose.Schema({

    company: {
        type: String,
        required: [true, "Company Name is required!!"]
    },
    position: {
        type: String,
        required: [true, "Position is required!!"]
    },
    status: {
        type: String,
        enum: ["pending","reject","interview"],
        // front end pr hum enum me ek aur option rakhenge ALL jobs ka, taki
        // user all select krke saari jobs ko dekh ske agar use filters nahi lagane to.
        // Wo bas front end pr rhega
        default: "pending"
    },
    workType:{
        type: String,
        required: [true, "Enter Worktype"],
        enum : ["full-time", "part-time", "internship", "contract"],
        default: "full-time"
    },

    workLocation: {
        type: String,
        default: "Mumbai",
        required: [true, "Work Location is Required!!"]
    },

    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

},{timeStamps: true});


const jobsModel = mongoose.model("Job", jobSchema);

export default jobsModel;