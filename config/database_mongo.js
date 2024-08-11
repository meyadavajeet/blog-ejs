const mongoose = require("mongoose");

const connect_to_mongo_db = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongo database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Error ${error}`);
  }
};

module.exports = connect_to_mongo_db;
