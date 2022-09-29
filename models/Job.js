const mongoose = require("mongoose");
const validator = require("validator");

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please provide a title for the job."],
  },
  company: {
    type: String,
    required: [true, "Please provide your company name."],
  },
  description: {
    type: String,
    required: [true, "Please provide a short description for this job."],
  },
  imageUrl: {
    type: String,
    required: [true, "Please provide a image url for this job."],
    validate: [validator.isURL, "Please provide a valid image url."],
  },
  isFullTime: {
    type: Boolean,
    required: [true, "Please specify if this job is full time or part time."],
  },
  experienceRequired: {
    type: Number,
    required: [
      true,
      "Please provide the required years of experience for this job.",
    ],
    min: [0, "Experience required cannot be negative."],
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;