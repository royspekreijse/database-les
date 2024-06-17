import * as mongoose from "mongoose";
const uri = "mongodb://localhost:27017";

const client = mongoose.createConnection(uri);

client.on("open", async () => {
  console.log("Connection to db is success");
  const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  });

  const User = client.model("User", userSchema);

  const result = await User.create({ firstName: "John", lastName: "Doe" });

  const result2 = await User.findOne({ firstName: "John" });
  console.log(result2);
});
