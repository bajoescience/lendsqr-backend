const express = require("express");
const app = express();
const cors = require("cors");

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(cors());
app.use(express.json());
app.use(requestLogger);

let users = [];

app.get("/", (req, res) => {
  res.send("<h1>Hwllo World</h1>");
});

app.get("/api/users", (req, res) => {
  console.log("now");

  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);

  if (!user) {
    res.statusMessage = `Sorry, user of id ${id} does not exist`;
    res.status(404).end();
  }
  res.json(user);
});

const generateId = () => {
  const maxId =
    users.length > 0 ? Math.max(...users.map((n) => Number(n.id))) : 0;

  return String(maxId + 1);
};

// Create a new user (NO POST REQUEST IS BEING USED)
app.post("/api/users", (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      error: "Content Missing",
    });
  }

  const user = {
    ...body,
    id: generateId(),
  };

  users = users.concat(user);

  res.json(user);
});

// Update User
app.put("/api/users/:id", (req, res) => {
  // Get the user id
  const body = req.body;

  const id = req.params.id;

  if (!body) {
    return res.status(400).json({
      error: "Bad Request: User to substitute does not exist",
    });
  }

  const changedUser = {
    ...body,
  };

  users = users.map((user) => (user.id !== id ? user : changedUser));
  res.json(changedUser);
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);

  res.status(204).end();
});

const unKnownEndPoint = (req, res) => {
  res.status(404).json({ error: "unknown endpoint" });
};

app.use(unKnownEndPoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
