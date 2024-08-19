const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = process.env.M;
mongoose.set("strictQuery", false);

mongoose.connect(url);

// Define a schema for the mongoose collection
// and create a model based on the schema
const userSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const User = mongoose.model("User", userSchema);

// // Create new instance of user
// const user = new User({
//   content: "Now Then Comrade",
//   important: true,
// });

// // Save created user
// user.save().then((result) => {
//   console.log("User Saved");
//   mongoose.connection.close();
// });

User.find({ important: false }).then((result) => {
  result.forEach((user) => {
    console.log(user);
  });
  mongoose.connection.close();
});
