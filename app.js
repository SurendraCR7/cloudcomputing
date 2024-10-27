// app.js
const express = require('express');
const cors = require('cors'); // Import CORS
const { Workout, connectDB } = require('./database'); // Adjust the path if needed

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON data

// Connect to MongoDB
connectDB();

// Route to add a new workout
app.post('/addWorkout', async (req, res) => {
    const { date, exerciseType, caloriesBurned } = req.body;

    const newWorkout = new Workout({ date, exerciseType, caloriesBurned });
    await newWorkout.save();

    res.json({ message: 'Workout added successfully!' });
});

// Route to get all workouts
app.get('/workouts', async (req, res) => {
    const workouts = await Workout.find({});
    res.json(workouts);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
