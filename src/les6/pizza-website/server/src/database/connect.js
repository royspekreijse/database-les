import mongoose from "mongoose";

let connection = null;

const connectToDatabase = async () => {
  if (connection) {
    return connection;
  }

  try {
    const mongoUri = "mongodb://localhost:27017/les6"; // Replace with your MongoDB URI

    connection = await mongoose.connect(mongoUri);

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to the database.");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected from the database.");
    });

    return connection;
  } catch (err) {
    console.error(`Failed to connect to the database: ${err}`);
    throw err;
  }
};

export default connectToDatabase;
