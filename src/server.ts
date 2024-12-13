import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 5000;

async function server() {
  try {
    // Use MongoDB Atlas URI or fallback to local MongoDB
    const dbURI =
      process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/tour-and-travel';

    await mongoose.connect(dbURI);

    console.log('Connected to the database successfully!');

    // Start the server after a successful DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🏃🏽‍♂️‍➡️`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:');

    // Exit process if database connection fails
    process.exit(1);
  }
}

server();
