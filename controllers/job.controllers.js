const {
  postANewJobService,
  getAllJobPostsService,
} = require("../services/job.services");

module.exports.postANewJob = async (req, res) => {
  try {
    const result = await postANewJobService(req.body);
    res.status(200).json({
      success: true,
      message: "Job posted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.getAllJobPosts = async (req, res) => {
  try {
    const jobs = await getAllJobPostsService();
    res.status(200).json({
      success: true,
      message: "All job posts.",
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
