const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/UserRoutes");
const tourRoutes= require("./Routes/TourRoutes")
const ReviewRoutes= require("./Routes/ReviewRoutes")
const BookingRoutes= require("./Routes/BookingRoutes")
const StripeRoutes=require("./Routes/StripeRoutes")
// Load environment variables from .env file
require("dotenv").config();

const PORT = process.env.PORT || 7000;

const mongoURI = process.env.MONGO_URI;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

// important for connect front with back should come before routes
app.use(cors()); // Enable CORS



app.use("/api/users",userRoutes);

app.use("/api/tour",tourRoutes)
app.use("/api/review",ReviewRoutes)
app.use("/api/booking",BookingRoutes)
app.use("/api/stripe",StripeRoutes)

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});



app.get("/", (req, res) => {
  res.send("Hello backend!");
});

app.listen(PORT, () => {
  console.log(`Server is up : http://localhost:${PORT}`);
});

module.exports = app;