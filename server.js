const app = require("./index");
require("dotenv").config();
const { connectToDb } = require("./utils/connectToDb");
const PORT = process.env.PORT || 5000;

connectToDb();

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
