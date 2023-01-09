const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");

//Create express server
const app = express();

//DataBase
dbConnection();

//CORS
app.use(cors());

//Public directory
app.use(express.static("public"));

// Body parce and reading
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//Default
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Listener requests
app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
