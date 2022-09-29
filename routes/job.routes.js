const express = require("express");
const {
  postANewJob,
  getAllJobPosts,
} = require("../controllers/job.controllers");

const router = express.Router();

router.route("/").post(postANewJob).get(getAllJobPosts);

module.exports = router;
