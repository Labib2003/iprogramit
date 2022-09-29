const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/job.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/job", jobRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
