const express = require("express");
const {
  postANewJob,
  getAllJobPosts,
  deleteAJobPost,
} = require("../controllers/job.controllers");

const router = express.Router();

router.route("/").post(postANewJob).get(getAllJobPosts);
router.route("/:id").delete(deleteAJobPost);

module.exports = router;
