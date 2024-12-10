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