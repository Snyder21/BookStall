import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// Load environment variables
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());

// Get environment variables
const PORT = process.env.PORT || 4001;
const URI = process.env.MONGO_URI;  // Use the MongoDB URI from .env file

// Connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error connecting to MongoDB:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
