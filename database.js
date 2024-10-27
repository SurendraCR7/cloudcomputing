// database.js
const mongoose = require('mongoose');

// Define the workout schema
const workoutSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true, // Now represents the date of the workout
    },
    exerciseType: {
        type: String,
        required: true, // Now represents the type of exercise
    },
    caloriesBurned: {
        type: Number,
        required: true,
    },
});

// Create the Workout model
const Workout = mongoose.model('Workout', workoutSchema);

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/fitnessTracker', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

// Export the Workout model and connect function
module.exports = { Workout, connectDB };
