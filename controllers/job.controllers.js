const {
  postANewJobService,
  getAllJobPostsService,
  deleteAJobPostService,
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

module.exports.deleteAJobPost = async (req, res) => {
  try {
    const result = await deleteAJobPostService(req.params.id);
    if (!result.deletedCount) {
      return res.status(404).json({
        success: false,
        message: "Failed to find and delete a job with the provided id.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully deleted the job post.",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
