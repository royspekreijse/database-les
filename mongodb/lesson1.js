const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect("mongodb://localhost:27017/my_database");
};

const student = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const Student = mongoose.model("Student", student);

connect()
  .then(async () => {
    const student = await Student.create({
      firstName: "John",
      lastName: "Doe",
    });
    console.log(student);
  })
  .catch((e) => console.error(e));
