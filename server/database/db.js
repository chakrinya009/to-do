const mongoose = require("mongoose");

const Connection = (URI) => {
  mongoose.connect(URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database",error.message);
  });
};   

module.exports = Connection;
