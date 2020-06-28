const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Defining Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve Static assests in production
if (process.env.NODE_ENV === "production") {
  // Set a static folder
  app.use(express.static("clientside/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "clientside", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
