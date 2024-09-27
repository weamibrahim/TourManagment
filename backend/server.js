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

const WebHookRoute = require('./Routes/WebHookRoutes');
const path = require("path");
// Load environment variables from .env file
require("dotenv").config();

const PORT = process.env.PORT || 7000;

const mongoURI = process.env.MONGO_URI;


// Middleware
app.use('/webhook', express.raw({ type: 'application/json' }), WebHookRoute);
app.use(cors());
app.use(express.json());



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// routes
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