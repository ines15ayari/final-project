const mongoose = require('mongoose')
const MONGO_URL = "mongodb+srv://ines15:ines15123@cluster0.qk3i2yr.mongodb.net/?retryWrites=true&w=majority"
const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Successfully connected to the Database.")
  } catch {
    console.log("Failed to connect to the Database.")
  }
}
module.exports = connect