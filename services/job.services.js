const Job = require("../models/Job");

module.exports.postANewJobService = async (data) => {
  return await Job.create(data);
};

module.exports.getAllJobPostsService = async () => {
  return await Job.find({});
};

module.exports.deleteAJobPostService = async (id) => {
  return await Job.deleteOne({ _id: id });
};
