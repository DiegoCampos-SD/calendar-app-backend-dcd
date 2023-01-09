const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("Db Online");
  } catch (error) {
    console.log(error);
    throw new Error("Initializing database error");
  }
};

module.exports = {
  dbConnection,
};
