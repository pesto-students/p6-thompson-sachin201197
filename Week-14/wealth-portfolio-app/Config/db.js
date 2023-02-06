const mongoos = require("mongoose");
mongoos.set("strictQuery", true);
async function connectDB() {
  try {
    var connect = await mongoos.connect(
      "mongodb+srv://sachin:sac456hin@cluster0.w1qzjsp.mongodb.net/?w=majority"
    );
    console.log("DB connected" + connect.connection.host);
  } catch (err) {
    console.log("Error");
    process.exit(1);
  }
}

module.exports = connectDB;
