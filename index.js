const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./model/user");
const config = require("./config/key");
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("db is connected");
  })
  .catch((e) => {
    console.log("error:", error);
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/users/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("hogaya");
});

app.listen(port, () => console.log(`Example app listening on port port!`));
