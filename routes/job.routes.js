const express = require("express");
const { postANewJob } = require("../controllers/job.controllers");

const router = express.Router();

router.route("/").post(postANewJob);

module.exports = router;