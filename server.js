import { config } from 'dotenv';
import express from 'express';
import { json } from 'express';
import userRoutes from './routes/userRoutes/userRoutes.js'; // Adjust the path accordingly
import blogRoutes from './routes/blogRoutes/blogRoutes.js'; // Adjust the path accordingly
import connect from './connection.js';
// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORT || 3000;
// Connect to MongoDB
connect();
// const db = connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Connected to MongoDB database");
// });

// Middleware
app.use(json());

// Routes
app.use('/api', userRoutes);
app.use('/api', blogRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
