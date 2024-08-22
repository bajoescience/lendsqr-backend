const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

console.log("connecting to MongoDB");

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB", error.message);
  });

// Define a schema for the mongoose collection
// and create a model based on the schema
const userSchema = new mongoose.Schema({
  id: String,
  organization: String,
  name: String,
  username: String,
  email: String,
  phone: String,
  date: String,
  guid: String,
  status: String,
  tier: Number,
  cash: String,
  age: Number,
  acctNo: Number,
  gender: String,
  generalDetails: [
    {
      title: String,
      values: [
        {
          title: String,
          value: String,
        },
      ],
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("User", userSchema);
