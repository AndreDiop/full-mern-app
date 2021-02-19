const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/full-mern-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateInstance: true,
  })
  .then((result) => {
    console.log("We got MongoDb");
  })
  .catch((err) => {
    console.log("error with mongo", err);
  });

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`I just made a few bands on http://localhost:${port}`);
});
