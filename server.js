import dotenv from 'dotenv';
import express from 'express';
import { json } from 'express';
import userRoutes from './routes/userRoutes/user.route.js';
import authRoutes from './routes/userRoutes/auth.route.js';
import blogRoutes from './routes/blogRoutes/blogRoutes.js';
import connect from './connection.js';
import cookieParser from 'cookie-parser';
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// Connect to MongoDB
connect();

app.use(json());
app.use(cookieParser());
// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api', blogRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
