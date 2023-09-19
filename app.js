const express = require("express");
const path = require("path"); // Import the 'path' module
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
