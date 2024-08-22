const express = require("express");
const compression = require("compression");
const app = express();
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const { dirname } = require("path");
const appDir = dirname(require.main.filename);

const { ObjectId } = require("mongodb");

const User = require("./models/user");

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const db = require("./db.json");

app.use(compression());

app.use("/", express.static("build"));
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/api/users/count", async (req, res) => {
  const filter = req.query.filter || {};

  // Take each filter property key and
  // replace the query value for each property
  //  with the regex value
  Object.keys(filter).forEach((key) => {
    filter[key] = { $regex: `${filter[key]}` };
  });

  const userCount = await User.find(filter).countDocuments();

  res.json(userCount);
});

app.get("/api/users", async (req, res) => {
  // Get the pagination query parameters
  // diff: How many users is displayed per page.
  // page: This is the page number for the users display.
  const page = req.query.page || 0;
  const diff = req.query.diff || 10;
  const filter = req.query.filter || {};

  // Take each filter property key and
  // replace the query value for each property
  //  with the regex value
  Object.keys(filter).forEach((key) => {
    filter[key] = { $regex: `${filter[key]}` };
  });

  // The body of the request contains the filter schema
  // Find a suitable way to filter the users collection
  const users = await User.find(filter)
    .skip(page * diff)
    .limit(diff);

  if (!users) {
    return res.status(404).json({
      error: "Users could not be found",
    });
  }

  res.json(users);
});

app.get("/api/users/init", async (req, res) => {
  // First delets all in the users database
  await User.deleteMany({});

  // // Initialize database
  const userObjects = db.users.map((user) => {
    const userToSave = {
      ...user,
      id: undefined,
    };

    return new User(userToSave);
  });
  const promiseArray = userObjects.map((user) => user.save());
  await Promise.all(promiseArray);

  res.status(200).end();
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;

  User.findById(id).then((user) => {
    res.json(user);
  });
});

// Create a new user (NO POST REQUEST IS BEING USED)
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (!body.username) {
    return res.status(400).json({
      error: "Content Missing",
    });
  }

  const user = new User({
    ...body,
  });

  const newUser = await user.save();
  if (!newUser) {
    return res.status(500).json({
      error: "could not serve data",
    });
  }

  res.json(newUser);
});

// Update User
app.put("/api/users/:id", async (req, res) => {
  // Get the user id
  const updateObj = req.body;
  console.log(updateObj);

  const id = req.params.id;
  // if (!ObjectId.isValid()) {
  //   return res.status(400).json({
  //     error: "User id is not a valid id",
  //   });
  // }

  if (!updateObj) {
    return res.status(400).json({
      error: "Bad Request: User to substitute does not exist",
    });
  }

  const userToChange = await User.findById(id);

  const userUpdateObj = {
    ...userToChange,
    organization: userToChange.organization,
    status: updateObj.status,
  };

  const changedUser = await User.findByIdAndUpdate(
    id,
    { $set: updateObj },
    {
      new: true,
    }
  );

  if (!changedUser) {
    return res.status(500).json({
      error: "Error Updating User",
    });
  }

  res.json(changedUser);
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;

  res.status(204).end();
});

// Catch all route
// To handle client routing
app.get("*", (req, res) => {
  res.sendFile(path.join(appDir, "build", "index.html"));
});

const unKnownEndPoint = (req, res) => {
  res.status(404).json({ error: "unknown endpoint" });
};

app.use(unKnownEndPoint);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
