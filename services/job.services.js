const Job = require("../models/Job");

module.exports.postANewJobService = async (data) => {
  return await Job.create(data);
};
