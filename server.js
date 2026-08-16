const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to my Micro API Service on GCP!",
    version: "1.0.0",
    deployedBy: "Vihan - DevOps Engineer"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
