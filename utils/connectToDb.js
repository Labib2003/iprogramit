const mongoose = require("mongoose");
require("dotenv").config();

module.exports.connectToDb = async () => {
  const mongoAtlasUri = `mongodb+srv://admin:${process.env.DB_PASS}@cluster0.oquq9kj.mongodb.net/?retryWrites=true&w=majority`;
  try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to the server")
    );
  } catch (e) {
    console.log("could not connect");
  }
};
