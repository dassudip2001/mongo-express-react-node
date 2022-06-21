const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
// app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// local machine mongodb connection
mongoose.connect("mongodb://localhost:27017/my_database", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// mongodb atlis
// const uri =
//   "mongodb+srv://dassudip:Sudip@78*@cluster0.czdiv.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(uri, {
//
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection sucessfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
