require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

// Routes
const user = require("./routes/user");
// const post = require("./routes/post");

app.use(express.json());

app.use("/api/users", user);
// app.use("/post", post);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
